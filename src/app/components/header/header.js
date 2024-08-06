import { exitSession } from "@/app/lib/actions";
import { auth } from "../../../../auth"
import styles from "./header.module.css"

export default async function Header() {
    const session = await auth();
    return (
        <div className={styles.container}>
            <h2>Warbler</h2>
            {session && session.user
                ? <div className={styles.container}>
                    <p><b>{session.user.name}</b></p>
                    <form action={exitSession}>
                        <button className="primary-btn" >Log out</button>
                    </form>
                </div>
                : <div className={styles.container}>
                    <a href="/auth/login" className="primary-btn">Log In</a>
                    <a href="/auth/register" className="primary-btn">Register</a>
                </div>
            }
        </div>
    )
}
