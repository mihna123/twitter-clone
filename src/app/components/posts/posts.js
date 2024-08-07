import Post from "./post/post";
import styles from "./posts.module.css";
import { auth } from "../../../../auth";
import { db } from "@vercel/postgres";
import { SessionProvider } from "next-auth/react";
import NewPostButton from "../new-post-button/new-post-button";

async function getPosts() {
    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM 
                                    posts ORDER BY datetime DESC`;
    
    const rowsExtra = await Promise.all(rows.map(async r => {
        const res = await client.sql`SELECT (username) FROM 
                                    users WHERE id=${r.user_id}`;
        const username = res.rows[0].username;
        return {...r, username};
    }));
    client.end();
    return rowsExtra
}

export default async function Posts() {
    const posts = await getPosts();
    const session = await auth();
    return (
        <div className={styles.container}>
            <SessionProvider session={session}>
                <NewPostButton />
            </SessionProvider>
            {posts.map((p, ind) =>
                <div key={ind} className={styles.child}>
                    <Post postData={p} />
                </div>)}
        </div>
    );
}
