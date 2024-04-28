export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({token, user}) {
            if (user){
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session, token}) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        autorized({auth, request}) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            //ONLY ADMIN CAN ACCESS ADMIN PANEL
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            //ONLY AUTHENTICATED USERS CAN ACCESS BLOG PAGE
            if(isOnBlogPage && !user) {
                return false;
            }

            // ONLY UNAUTHENTICATED USERS CAN ACCESS LOGIN PAGE
            if(isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }
        },
    }
}