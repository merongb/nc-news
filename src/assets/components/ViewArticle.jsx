import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../../utils";
import CommentCard from "./CommentCard";

export default function ViewArticle() {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.article)
        })
    }, [article_id])

    function increaseVote() {
        updateArticleVotes(article_id, "upvote").then(() => {
                  getArticleById(article_id).then((response) => {
            setArticle(response.article)
        })  
        }, [])
      }
      function decreaseVote() {
        updateArticleVotes(article_id, "downvote").then(() => {
                  getArticleById(article_id).then((response) => {
            setArticle(response.article)
        })  
        }, [])
      }
    


    return (
        <div>
        <article className="single-article">
        <h2>{article.title}</h2>
        <h4>Topic {article.topic}</h4>
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p>Authored By {article.author} Published on {new Date(article.created_at).toLocaleString()}</p>
        <p>{article.votes} Votes</p>
        <button onClick={increaseVote}>♡</button>
        <button onClick={decreaseVote}>👎</button>
        <p>{article.comment_count} Comments</p>
        </article>
        <CommentCard/>
</div>
    )
}