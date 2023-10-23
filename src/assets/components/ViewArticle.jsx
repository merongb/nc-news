import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils";

export default function ViewArticle() {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.article)
        })
    }, [article_id])

    return (
        <section>
        <h2>{article.title}</h2>
        <h4>Topic {article.topic}</h4>
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p>Authored By {article.author} Published on {new Date(article.created_at).toLocaleString()}</p>
        <p>{article.votes} Votes</p>
        <p>{article.comment_count} Comments</p>
        </section>
    )
}