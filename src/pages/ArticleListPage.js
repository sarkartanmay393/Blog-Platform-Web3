import articles from "./article-contents";
import {Link} from "react-router-dom";

const ArticleListPage = function () {
    return (
        <>
        <div className='container'>
            <h2>Articles</h2>
            {articles.map((article, i) => (
                <Link key={article.name} id='blog-link-preview' to={'/articles/' + article.name}>
                    <div id='blog-preview' >
                        <h3>{article.title}</h3>
                        <p>{article.content[0].substring(0, 150)}</p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
}

export default ArticleListPage;