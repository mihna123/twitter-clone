import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import bcrypt from "bcrypt";

async function register(formData) {
    'use server';

    try {
        const username = formData.get('username');
        const password = formData.get('password');
        const rpassword = formData.get('rpassword');
        
        if(!username || username.length < 5) {
            return;
        }

        if(password.length < 8) {
            return;
        }

        if(password !== rpassword) {
            return;
        }

        const passhash = await bcrypt.hash(password, 10);
        await sql`
        INSERT INTO users (username, passhash)
                    VALUES (${username}, ${passhash}); `

    } catch (e) {
        console.error(e.message);
    }
    redirect('/auth/login');
}

export default function Register() {
    return (
        <div className={styles.container}>
            <form action={register}>
                <h2>Welcome to Warbler!</h2>
                <label>Username</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <label>Repeat password</label>
                <input type="password" name="rpassword" />
                <button className="primary-btn">Register</button>
            </form>
            <p>Already have an account? <a href="/auth/login">Login here</a></p>
        </div>
    )
}
