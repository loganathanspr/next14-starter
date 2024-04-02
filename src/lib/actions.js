"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import connectToDb from "./utils";

export const sayHello = async () => {
    "use server"
    console.log("Hello! This is a server action");
}

export const deletePost = async (formData) => {
    const {id} = Object.fromEntries(formData);
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("Deleted from db");
        revalidatePath("/blog");
    }catch(err){
        console.log(err);
        return {error: "Something went wrong!"};
    }
}

export const addPost = async (formData) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData);
    console.log(title, desc, slug, userId);
    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        await newPost.save();
        console.log("Saved to db");
        revalidatePath("/blog");

    }catch(err){
        console.log(err);
        return {error: "Something went wrong"};
    }
}