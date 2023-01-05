import { useFirestoreCol } from "../firestoreHooks";
import { NewsArticle } from "./NewsArticle";
import "./news.css";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { useState } from "react";

function News(props) {
    const [editingArticle, setEditingArticle] = useState("");
    const newsArticles = useFirestoreCol(props.db, "news-articles");

    function editArticle(id) {
        setEditingArticle(id);
    }

    function deleteArticle(id) {
        if (window.confirm(`Are you sure you want to delete the article ${id}?`)) {
            deleteDoc(doc(props.db, "news-articles", id));
        }
    }

    async function addNews() {
        var id = prompt("id");
        var title = prompt("title");
        var shortDescription = prompt("short-description");
        var description = prompt("description");
        var type = prompt("type");
        var data = {
            "title": title,
            "short-description": shortDescription,
            "description": description,
            "type": type
        };
        await setDoc(doc(props.db, "news-articles", id), data);
    }

    return (
        <div>
            <h1>News</h1>
            <div className="news-article-container">
                {newsArticles.map((x, i) => <NewsArticle article={x} key={i} editArticle={editArticle} deleteArticle={deleteArticle} />)}
            </div>
            <button type="button" onClick={addNews}>Add</button>
            {editingArticle != "" && (
                <div className="edit-article">
                    <div className="edit-article-panel"></div>
                </div>
            )}
        </div>
    )
}

export { News }