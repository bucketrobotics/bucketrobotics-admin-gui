import "./news.css";

function NewsArticle(props) {
    return (
        <div className="news-article">
            <div className="news-article-title">{props.article["id"]}: {props.article["title"]}</div>
            <div>Type: <strong>{props.article["type"]}</strong></div>
            <div>{props.article["short-description"]}</div>
            <button type="button" onClick={() => props.deleteArticle(props.article["id"])}>Delete</button>
        </div>
    )
}

export { NewsArticle }