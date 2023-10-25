import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleId, postComment, getUsers } from "../../utils";

export default function CommentCard() {
    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) 
    const [commentBody, setCommentBody] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

   
    useEffect(() => {
        getCommentByArticleId(article_id).then((response) => {
            setComments(response.comments)
            setLoading(false)
        })
    }, [comments])

const handleSubmit = (e) => {

e.preventDefault()

const username = "weegembump"
const body = commentBody
console.log(body);

if (commentBody.body === ""){
    setError("Enter a comment")
    setIsSubmitting(false)
    return
    }   
    else 
    {
        setIsSubmitting(true)
postComment(article_id,{username, body}).then((res)=> {
    e.target[0].value = "";
    setCommentBody("")
    setError(null)
    console.log(res.data.comment);
    const newComment = {
        ...res.data.comment,
        author: res.data.comment.author,
    };
    console.log(newComment);

    setComments([...comments, newComment])
    setIsSubmitting(false)
})
.catch((err) => {
    console.log(err);
    if (err.response.data) {
        setError(err.response.data.message);
      } else if (err){
        setError("An error occurred while posting the comment.");
      } else {
        setError(null)
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
                <input type="text" placeholder="Add a comment..." value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}/>
                <button disabled={isSubmitting}>Comment</button>
            </form></section>)
    }   else 
    return (
        <section className="comment-container">
            <h3>Comments</h3>
            <br />
            <form id="comment-section" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a comment..." value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}/>
                <button disabled={isSubmitting}>Comment</button>
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