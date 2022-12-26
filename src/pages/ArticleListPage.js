import articles from "./article-contents";
import {Link} from "react-router-dom";

const ArticleListPage = function () {
    return (

        <div className="container">
            <h2>Articles List</h2>
            <ul>
            {articles.map((article, i) => (
                    <li id="link-each-articles"><Link to={'/articles/' + article.name} >{article.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleListPage;