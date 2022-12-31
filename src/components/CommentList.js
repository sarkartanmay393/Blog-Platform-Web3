import { useState } from "react";
import axios from "axios";

const CommentList = ({ comments, articleId, onArticleUpdate, user }) => {
    const [username, setUsername] = useState("rad");
    const [comment, setComment] = useState("");

    const sendComment = async () => {
        const response = await axios.post(`/api/articles/${articleId}/comments`, {
            username: username,
            comment: comment
        });
        const updatedArticle = response.data;
        setComment("");

        onArticleUpdate(updatedArticle);
    }



    return (
        <>
            <h4>Comments:</h4>
            {user ? <div className='form'>
                <input
                    id='comment-input-area'
                    type='text'
                    name='comment'
                    placeholder='Type comment...'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key == 'Enter') {
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