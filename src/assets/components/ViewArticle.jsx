import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentByArticleId } from "../../utils";

export default function ViewArticle() {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.article)
        })
    }, [article_id])

    useEffect(() => {
        getCommentByArticleId(article_id).then((response) => {
            setComments(response.comments)
        })
    })

    return (
        <div>
        <article className="single-article">
        <h2>{article.title}</h2>
        <h4>Topic {article.topic}</h4>
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p>Authored By {article.author} Published on {new Date(article.created_at).toLocaleString()}</p>
        <p>{article.votes} Votes</p>
        <p>{article.comment_count} Comments</p>
        </article>
        <section className="comment-container">
            <h3>Comments</h3>
            <br />
            <button>Comment</button>
        <ul>
            {comments.map((comment) => (
                <li className="comment-card" key={comment.comment_id}>
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
        </div>
    )
}