import Header from "./components/header/header";
import NewPostModal from "./components/new-post-modal/new-post-modal";
import Posts from "./components/posts/posts";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <NewPostModal show={false} />
            <Header />
            <Posts />
        </main>
    );
}
