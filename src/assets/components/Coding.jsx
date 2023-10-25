import { useEffect, useState } from "react";
import { getArticles } from "../../utils";
import { Link } from "react-router-dom";



export function Coding() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles('coding').then((res) => {
            setArticles(res.articles)
        })
    }, [])
    return (
        <section className="article-container">
      <ul>
        {articles.map((article) => (
          <li key={article.article_id+article.article_img_url} className="article-card">
          <img src={article.article_img_url} alt={article.title} />
          <br />
            {article.title}
            <br />
            Author - {article.author}
            <br />
            Topic: {article.topic}
            <br />
            {article.comment_count} Comments
            <br />
            {article.votes} Votes
            <br />
            Article - {article.article_id}
            <br />
            Published on {new Date(article.created_at).toLocaleString()}
            <br />
            <Link to={`/view-article/${article.article_id}`}>
                <button>View Article</button>
              </Link>
          <button>Edit Article</button>
          </li>
        ))}
      </ul>
    </section>
    )
}