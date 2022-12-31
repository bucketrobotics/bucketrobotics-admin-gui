import { useEffect, useState } from "react";
import { doc, collection, onSnapshot } from "firebase/firestore";

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

function useFirestoreDoc(db, colName, docName) {
    const [document, setDocument] = useState([]);

    useEffect(() => {
        return onSnapshot(doc(db, colName, docName), (snapshot) => {
            var data = snapshot.data();
            data["id"] = snapshot.id;
            setDocument(data);
        });
    })

    return document;
}

export { useFirestoreCol, useFirestoreDoc };