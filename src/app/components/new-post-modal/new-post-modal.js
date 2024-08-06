import styles from "./new-post-modal.module.css";

/**
* @param {Object} params 
* @param {Boolean} params.show 
* */
export default function NewPostModal({ show }) {
    return (
        <div>
            {show &&
                <div className={styles.backdrop}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <p>What&apos;s on your mind?</p>
                            <button className="primary-btn">Close</button>
                        </div>
                        <form>
                            <textarea type="text" name="text" cols={5} />
                        </form>
                    </div>
                </div>}
        </div>
    )
}
