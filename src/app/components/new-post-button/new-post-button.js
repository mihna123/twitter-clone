'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import NewPostModal from "../new-post-modal/new-post-modal";

export default function NewPostButton() {
    const [showNewPost, setShowNewPost] = useState(false);
    const session = useSession();

    function closeModal() {
        setShowNewPost(false);
    }

    function openModal() {
        setShowNewPost(true);
    }

    return (
        <div>
            <NewPostModal show={showNewPost} closeModal={closeModal} session={session} />
            <button className="primary-btn" onClick={openModal}>Add a new post</button>
        </div>
    )

}
