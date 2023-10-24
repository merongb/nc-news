import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleId, postComment, getUsers } from "../../utils";

export default function CommentCard() {
    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) 
   
    useEffect(() => {
        getCommentByArticleId(article_id).then((response) => {
            setComments(response.comments)
            setLoading(false)
        })
    }, [article_id])

const handleSubmit = (e) => {

e.preventDefault()

let username = e.target[0].value
const commentBody = {
    username,
    body: e.target[1].value
}
if (commentBody.body === ""){
    setError("Enter a comment")
    }   
    else 
    {
postComment(article_id,commentBody).then((res)=> {
    e.target[0].value = "";
    e.target[1].value = "";

    setError(null)
    const newComment = {
        ...res.comment,
        author: res.comment.username,
    };

    setComments([...comments, newComment])
})
.catch((err) => {
    if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else if (err){
        setError("An error occurred while posting the comment.");
      }
})
}
}
if(loading){
    return <p>Loading...</p>
}
     if (comments.length === 0){
        return (
        <section>
        <h3>Comments</h3>
        <p>Be the first to comment</p>
        <br />
        <form onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="Add a comment..."/>
                <button>Comment</button>
            </form></section>)
    }   else 
    return (
        <section className="comment-container">
            <h3>Comments</h3>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="Add a comment..."/>
                <button>Comment</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
            {comments.map((comment) => (
                <li key={comment.body + comment.comment_id} className="comment-card" >
                    <h4>{comment.author}</h4>
                    <br />
                    {comment.body}
                    <br />
                    {comment.votes} Votes
                    <br />
                    Posted {new Date(comment.created_at).toLocaleString()}
                    <br />
                    <button>♡</button>
                    <button>👎</button>
                </li>
            ))}
        </ul>
        </section>

    )
}