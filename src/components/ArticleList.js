import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const articles = props.posts.map((p) => <Article title={p.title} date={p.date} preview={p.preview} />)
    return(
    <main>
        {articles}
    </main>
    )   
}
export default ArticleList;