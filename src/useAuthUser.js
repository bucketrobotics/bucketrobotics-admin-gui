import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

function useAuthUser(auth) {
    const [uid, setUid] = useState("");

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUid(uid);
            } else {
                // User is signed out
                setUid("");
            }
        });
    });

    return uid;
}

export { useAuthUser }