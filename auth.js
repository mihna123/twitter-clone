import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (creds) => {
                const { username, password } = creds;
                const { rows } = await sql`SELECT * FROM users 
                                            WHERE username = ${username}`
                if (!rows) {
                    return null;
                }
                const user = rows[0];

                const result = await bcrypt.compare(password, user.passhash);

                if(!result) {
                    return null;
                }

                return { name: user.username };
            },
        }),
    ],
});
