'use server'

import { signIn, signOut, auth } from "../../../auth";
import { db } from "@vercel/postgres";

/**
* @param {FormData} formData 
* */
export async function authenticate(formData) {
    await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        redirectTo: "/"
    });
}

export async function exitSession() {
    await signOut();
}

/**
* @param {FormData} formData 
* */
export async function addNewPost(_prevState, formData) {
    const client = await db.connect();
    const session = await auth();

    const username = session.user?.name;
    const { rows } = await client.sql`SELECT (id) FROM users 
                                    WHERE username=${username}`;
    const userId = rows[0].id;

    if (!userId) {
        console.error("There was an error with authentification!");
        return;
    }

    const text = formData.get('text');
    const datetime = new Date();

    const { rowCount } = await client.sql`INSERT INTO posts (user_id, text, datetime)
                                    VALUES (${userId}, ${text}, ${datetime})`
    await client.end();
    if (rowCount > 0) {
        return { postSuccess: true }
    } else {
        return { errorMessage: "There was an error with the server!"};
    }
}

/**
* @param {Number} id 
* */
export async function removePostById(id) {
    // TODO: add formData studd to this
    const client = await db.connect();
    await client.sql`DELETE FROM posts WHERE id = ${id}`;
    await client.end();
}
