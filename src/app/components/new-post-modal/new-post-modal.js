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

                </div>}
        </div>
    )
}
