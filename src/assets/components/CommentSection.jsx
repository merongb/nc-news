import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleId, postComment } from "../../utils";
import { DeleteComment } from "./DeleteComment";

export default function CommentSection({user}) {
    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) 
    const [commentBody, setCommentBody] = useState("")
    const [isPosting, setIsPosting] = useState(false)

   
    useEffect(() => {
        getCommentByArticleId(article_id).then((response) => {
            setComments(response.comments)
            setLoading(false)
        })
    }, [comments])
const handleSubmit = (e) => {
setIsPosting(true)
e.preventDefault()

const username = user.username
const body = commentBody

if (body === ""){
    setIsPosting(false)
    setError("Enter a comment")
    return
    }   
if (!username){
    setIsPosting(false)
    setError("Select a valid user")
}
    else 
    {
postComment(article_id,{username, body}).then((res)=> {
    e.target[0].value = "";
    setCommentBody("")
    setError(null)
    const newComment = {
        ...res.data.comment,
        author: res.data.comment.author,
    };

    setComments([...comments, newComment])
})
.catch((err) => {
    if (err.response.data) {
        setError(err.response.data.message);
      } else if (err){
        console.log(err);
        setError("An error occurred while posting the comment.");
      } else {
        setError(null)
      }
}).finally(() => {
    setIsPosting(false)
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
                <input className="comment-input" type="text" placeholder="Add a comment..." value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}/>
                <button className="comment-button" disabled={isPosting}>{isPosting ? "Posting Comment..." : "Comment"}</button>
            </form></section>)
    }   else 
    return (
        <section className="comment-container">
            <h3>Comments</h3>
            <br />
            <form id="comment-section" onSubmit={handleSubmit}>
            <input className="comment-input" type="text" placeholder="Add a comment..." value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}/>
                <button className="comment-button" disabled={isPosting}>{isPosting ? "Posting Comment..." : "Comment"}</button>
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
                    {comment.author === user.username && <DeleteComment comment_id={comment.comment_id} />}
                </li>
            ))}
        </ul>
        </section>

    )
}