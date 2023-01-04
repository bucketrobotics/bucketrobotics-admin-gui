import { useFirestoreCol } from "../firestoreHooks";
import { NewsArticle } from "./NewsArticle";
import "./news.css";
import { doc, deleteDoc } from "firebase/firestore";
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

    return (
        <div>
            <h1>News</h1>
            <div className="news-article-container">
                {newsArticles.map((x, i) => <NewsArticle article={x} key={i} editArticle={editArticle} deleteArticle={deleteArticle} />)}
            </div>
            {editingArticle != "" && (
                <div className="edit-article">
                    <div className="edit-article-panel"></div>
                </div>
            )}
        </div>
    )
}

export { News }