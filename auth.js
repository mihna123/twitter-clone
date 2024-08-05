import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (creds) => {
                // TODO: Need to do this properly and hash password
                if (creds.username !== "mihna123")
                    throw new Error("User not found.");
                if (creds.password !== "12345678")
                    throw new Error("Wrong password")
                const user = {
                    name: creds.username,
                    real: true
                }
                return user;
            },
        }),
    ],
});
