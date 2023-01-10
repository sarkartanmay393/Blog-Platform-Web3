import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const CommentList = ({ comments, articleId, onArticleUpdate }) => {
    const [comment, setComment] = useState("");
    const { user } = useUser();

    const sendComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post(`/api/articles/${articleId}/comments`, { email: user.email, comment: comment }, { headers });
        const updatedArticle = response.data;
        setComment("");

        onArticleUpdate(updatedArticle);
    }



    return (
        <>
            <h4>Comments:</h4>
            {user ? <div className='form'>
                <p className="commenting-as-el">You are commenting as <code>{user.email}</code></p>
                <input
                    id='comment-input-area'
                    type='text'
                    name='comment'
                    placeholder='Type comment...'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            sendComment();
                        }
                    }}
                />
                <button id="comment-send-btn" type='submit' onClick={sendComment}>Send</button>
            </div> : <></>}
            {comments.map((each, i) => (
                <div className='comment' key={each.username + ": " + each.comment + " :" + i}>
                    <p>{each.comment}</p>
                    <small>By {each.username}</small>
                </div>
            ))}
        </>
    );
}

export default CommentList;