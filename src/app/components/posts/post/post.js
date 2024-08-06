import styles from "./post.module.css";

/**
* @param {Object} params 
* @param {Object} params.postData 
* @param {String} params.postData.text 
* @param {Array} params.postData.replies
* @param {Array} params.postData.likes
* @param {Array} params.postData.reposts
* @param {String} params.postData.imgUrl
* */
export default function Post({ postData }) {
    return (
        <div className={styles.container}>
            <p className={styles.header}><b>someone</b> posted:</p>
            <p className={styles.content}>{postData.text}</p>
            {postData.imgUrl &&
                <img src={postData.imgUrl} alt="post image" />}
            <div className={styles.footer}>
                <button className="primary-btn">Like {postData.likes.length}</button>
                <button className="primary-btn">Reply {postData.replies.length}</button>
                <button className="primary-btn">Repost {postData.reposts.length}</button>
            </div>
        </div>
    )
}
