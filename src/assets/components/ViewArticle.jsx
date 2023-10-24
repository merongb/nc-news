import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../../utils";
import CommentCard from "./CommentCard";
import Voting from "./Voting";

export default function ViewArticle() {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [voteCount, setVoteCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.article)
            setVoteCount(response.article.votes)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [article_id])


if(loading){
    return <p>Loading...</p>
}
    return (
        <div>
        <article className="single-article">
        <h2>{article.title}</h2>
        <h4>Topic {article.topic}</h4>
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p>Authored By {article.author} Published on {new Date(article.created_at).toLocaleString()}</p>
        <p>{voteCount} Votes</p>
        <Voting setVoteCount={setVoteCount}/>
        <p>{article.comment_count} Comments</p>
        </article>
        <CommentCard/>
</div>
    )
}