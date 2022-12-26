import {useParams} from "react-router-dom";
import articles from "./article-contents";

const ArticlePage = function () {
    const { articleId } = useParams();
    const article = articles.find(eachArticle => eachArticle.name == articleId);

    return (
        <div id="article-body">
            <h1>{article.title}</h1>
            {article.content.map((para, i) => (
                <p key={i}>{para}</p>
            ))}
        </div>
    );
}

export default ArticlePage;