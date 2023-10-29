import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { getArticleById } from "../../utils";
import CommentSection from "./CommentSection";
import Voting from "./Voting";

export default function ViewArticle({user}) {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [voteCount, setVoteCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.article)
            setVoteCount(response.article.votes)
            setLoading(false)
            console.log('hello');
        })
        .catch((error) => {
            setLoading(false)
            setError(error.response.data.message);
        })
    }, [article_id])
    

if (error){
    return (
        <section>
        <h3>{error}</h3>
        <p>Return to <button><Link to="/"> Articles</Link></button></p>
        </section>
    )
}

if(loading){
    return <p>Loading...</p>
}
    return (
        <div className="single-article">
            <div>
        <article className="article-text">
        <h2>{article.title}</h2>
        <h4>Topic {article.topic}</h4>
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p>Authored By {article.author} Published on {new Date(article.created_at).toLocaleString()}</p>
        <p>{voteCount} Votes</p>
        <Voting setVoteCount={setVoteCount}/>
        <p>{article.comment_count} Comments</p>
        </article>
        </div>
        <CommentSection user={user} />
</div>
    )
}