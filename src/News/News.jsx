import { useFirestoreCol } from "../firestoreHooks";
import { NewsArticle } from "./NewsArticle";
import { EditArticle } from "./EditArticle";
import "./news.css";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { useState } from "react";

function News(props) {
    const [editArticleData, setEditArticleData] = useState(null);
    const newsArticles = useFirestoreCol(props.db, "news-articles");

    function editArticle(id) {
        setEditArticleData(newsArticles.find(x => x["id"] === id));
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

    function close() {
        setEditArticleData(null);
    }

    return (
        <div>
            <h1>News</h1>
            <div className="news-article-container">
                {newsArticles.map((x, i) => <NewsArticle article={x} key={i} editArticle={editArticle} deleteArticle={deleteArticle} />)}
            </div>
            <button type="button" onClick={addNews}>Add</button>
            {editArticleData && (
                <div className="edit-article">
                    <div className="edit-article-panel">
                        <EditArticle db={props.db} article={editArticleData} close={close}></EditArticle>
                    </div>
                </div>
            )}
        </div>
    )
}

export { News }