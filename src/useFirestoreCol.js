import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

function useFirestoreCol(db, name) {
    const [col, setCol] = useState([]);

    useEffect(() => {
        return onSnapshot(collection(db, name), (snapshot) => {
            const cols = [];
            snapshot.forEach((doc) => {
                var data = doc.data();
                data["id"] = doc.id;
                cols.push(data);
            });
            setCol(cols);
        });
    })

    return col;
}

export { useFirestoreCol };