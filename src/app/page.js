import Header from "./components/header/header";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            Hello World!
        </main>
    );
}
