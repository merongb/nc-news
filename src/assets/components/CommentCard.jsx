import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleId } from "../../utils";

export default function CommentCard() {
    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getCommentByArticleId(article_id).then((response) => {
            setComments(response.comments)
            setLoading(false)
        })
    }, [article_id])
if(loading){
    return <p>Loading...</p>
}
     if (comments.length === 0){
        return (
        <section>
        <h3>Comments</h3>
        <p>Be the first to comment</p>
        <br />
        <button>Comment</button></section>)
    }   else 
    return (
        <section className="comment-container">
            <h3>Comments</h3>
            <br />
            <button>Comment</button>
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