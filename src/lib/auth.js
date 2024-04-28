import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import connectToDb from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
    try {
        connectToDb();
        const user = await User.findOne({username: credentials.username});
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) {
            throw new Error("Wrong credentials!");
        }
        return user;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
}

export const {handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({ 
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID, 
            clientSecret: process.env.GITHUB_SECRET}
        ),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch(err) {
                    console.log(err);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            console.log(user, account, profile);
            if (account.provider === "github") {
                connectToDb();
                try {
                    const user = await User.findOne({email: profile.email});
                    if (!user) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });
                        await newUser.save();
                    }
                }catch(err) {
                    console.log(err);
                    return false;
                }
            }
            return true;
        }
    }
});