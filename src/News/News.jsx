import { useFirestoreCol } from "../useFirestoreCol";
import { NewsArticle } from "./NewsArticle";
import "./news.css";
import { doc, deleteDoc } from "firebase/firestore";

function News(props) {
    const newsArticles = useFirestoreCol(props.db, "news-articles");

    function deleteArticle(id) {
        if (window.confirm(`Are you sure you want to delete the article ${id}?`)) {
            deleteDoc(doc(props.db, "news-articles", id));
        }
    }

    return (
        <div>
            <h1>News</h1>
            <div className="news-article-container">
                {newsArticles.map((x, i) => <NewsArticle article={x} key={i} deleteArticle={deleteArticle} />)}
            </div>
        </div>
    )
}

export { News }