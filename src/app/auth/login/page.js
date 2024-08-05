'use client'

import { authenticate } from '@/app/lib/actions';
import styles from "./page.module.css"

export default function Login() {

    return (
        <div className={styles.container}>
            <form action={authenticate}>
                <h2>Welcome back!</h2>
                <label>Username</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <button className="primary-btn">Log In</button>
            </form>
            <p>Don't have an account? <a href="/auth/register">Register here</a></p>
        </div>
    )
}
