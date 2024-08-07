import styles from "./new-post-modal.module.css";
import { addNewPost } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect} from "react";
import { useFormState } from "react-dom";
/**
* @param {Object} params 
* @param {Boolean} params.show 
* Used to controll if the modal is shown
* @param {function(): void} params.closeModal 
* Function to close the modal
* @param {import("next-auth").Session} params.session
* Session to access the user
* */
export default function NewPostModal({ show, closeModal, session }) {
    const [state, formAction] = useFormState(addNewPost, {});
    const router = useRouter();
    useEffect(() => {
        if(state.postSuccess) {
            closeModal();
            router.refresh();
        };
    }, [state]);
    return (
        <div>
            {show &&
                <div className={styles.backdrop}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <p>What&apos;s on your mind<b>{session?.data.user ? `, ${session.data.user.name}` : ""}</b>?</p>
                            <button className="primary-btn" onClick={closeModal}>Cancel</button>
                        </div>
                        <form action={formAction}>
                            <textarea type="text" name="text" cols={5} />
                            <button type="submit" className="primary-btn">Post</button>
                        </form>
                    </div>
                </div>}
        </div>
    )
}
