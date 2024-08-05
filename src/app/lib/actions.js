'use server'

import { signIn, signOut } from "../../../auth";

export async function authenticate(formData) {
    await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        redirectTo: "/"
    });
}

export async function exitSession() {
    await signOut();
}
