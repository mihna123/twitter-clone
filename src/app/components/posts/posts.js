import Post from "./post/post";
import styles from "./posts.module.css";

export default function Posts() {
    const posts = [
        {
            userId: 14,
            replies: [],
            likes: [],
            reposts: [],
            text: "This is my first ever post!",
            imgUrl: "https://content.wepik.com/media/ai/top-image-3.png",
            date: new Date()
        },
        {
            userId: 14,
            replies: [],
            likes: [],
            reposts: [],
            text: "This is the moment you all have been waiting for!!!",
            date: new Date()
        }
    ];

    return (
        <div className={styles.container}>
            {posts.map((p, ind) =>
                <div key={ind} className={styles.child}>
                    <Post postData={p} />
                </div>)}
        </div>
    );
}
