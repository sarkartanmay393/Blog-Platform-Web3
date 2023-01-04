import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import articles from "./article-contents";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import CommentList from '../components/CommentList';
import useUser from '../hooks/useUser';

const ArticlePage = () => {
    const { articleId } = useParams();
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { user } = useUser();

    useEffect(() => {
        const loadArticleInformation = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? {authToken: token} : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        
        loadArticleInformation();
    }, []);

    const article = articles.find(eachArticle => eachArticle.name === articleId);
    const upvote_icon = `https://cdn2.iconfinder.com/data/icons/essential-ui-1/32/thumbs-up-512.png`;
    const navigate = useNavigate();

    const addUpvote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? {authToken: token} : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (article) {
        return (
            <>
                <div id="article-body">
                    <h1>{article.title}</h1>
                    <p id='upvote-text'> Upvote(s): {articleInfo.upvotes}</p>
                    {article.content.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>

                <hr />

                {user ?
                    <button className='upvote-btn' onClick={addUpvote}>
                        <img src={upvote_icon} height='24' />
                        <span>Upvote</span>
                    </button>
                    :
                    <button className='signin-btn' onClick={() => { navigate("/login") }}>
                        <span>Login to upvote</span>
                    </button>
                }



                <div className='comment-section' key={articleId + "comments"}>
                    <CommentList
                        comments={articleInfo.comments}
                        articleId={articleId}
                        onArticleUpdate={(updatedArticle) => { setArticleInfo(updatedArticle) }}
                    />
                </div>
            </>
        );
    } else {
        return (
            <NotFoundPage />
        );
    }
}

export default ArticlePage;