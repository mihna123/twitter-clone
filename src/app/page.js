import Header from "./components/header/header";
import Posts from "./components/posts/posts";
import styles from "./page.module.css";

export default function Home() {

    return (
        <main className={styles.main}>
            <Header />
            <Posts />
        </main>
    );
}
