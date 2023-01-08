import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

function EditArticle(props) {
    const [articleTitle, setArticleTitle] = useState(props.article["title"]);
    const [articleType, setArticleType] = useState(props.article["type"]);
    const [articleShortDescription, setArticleShortDescription] = useState(props.article["short-description"]);
    const [articleDescription, setArticleDescription] = useState(props.article["description"]);

    async function update() {
        var data = {
            "title": articleTitle,
            "short-description": articleShortDescription,
            "description": articleDescription,
            "type": articleType
        };
        await setDoc(doc(props.db, "news-articles", props.article["id"]), data);

        props.close();
    }

    return (
        <div>
            <h1>{props.article["id"]}:</h1>
            <h2>Title: <input type="text" value={articleTitle} onChange={e => setArticleTitle(e.target.value)}></input></h2>
            <div>Type: <strong><input type="text" value={articleType} onChange={e => setArticleType(e.target.value)}></input></strong></div>
            <div>Short Desc.: <input type="text" value={articleShortDescription} onChange={e => setArticleShortDescription(e.target.value)}></input></div>
            <div>Desc.: <input type="text" value={articleDescription} onChange={e => setArticleDescription(e.target.value)}></input></div>
            <button type="button" onClick={update}>Update</button>
            <button type="button" onClick={props.close}>Cancel</button>
        </div>
    )
}

export { EditArticle };