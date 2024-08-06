import styles from "./post.module.css";

/**
* @param {Date} date  
* The date to be formated into a string
* @return {String} 
* The string representing a date in a prettier format
* */
function getPrettyDate(date) {
    const preety = `${date.getHours()}:${date.getMinutes()} 
        - ${date.getDate()}. ${date.getMonth()}. ${date.getFullYear()}.`;
    return preety;
}

/**
* @param {Object} params 
* @param {Object} params.postData 
* @param {String} params.postData.text 
* @param {Array} params.postData.replies
* @param {Array} params.postData.likes
* @param {Array} params.postData.reposts
* @param {String} params.postData.imgUrl
* @param {Date} params.postData.date
* @param {Number} params.postData.id
* */
export default function Post({ postData }) {
    return (
        <div className={styles.container}>
            <p className={styles.header}><b>someone</b> posted:</p>
            <p className={styles.content}>{postData.text}</p>
            {postData.imgUrl &&
                <img src={postData.imgUrl} alt="post image" />}
            <p className={styles.date}>{getPrettyDate(postData.date)}</p>
            <div className={styles.footer}>
                <button className="primary-btn">Like {postData.likes.length}</button>
                <button className="primary-btn">Reply {postData.replies.length}</button>
                <button className="primary-btn">Repost {postData.reposts.length}</button>
            </div>
        </div>
    )
}
