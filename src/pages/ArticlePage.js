import {useParams} from "react-router-dom";
import articles from "./article-contents";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = function () {
    const { articleId } = useParams();
    const article = articles.find(eachArticle => eachArticle.name == articleId);

    if (article === undefined) {
        return (
            <NotFoundPage />
        );
    }

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