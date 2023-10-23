import { useState, useEffect } from "react";
import { getArticles } from "../../utils";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.articles)
    }, [])
  }, [])

  return (
    <div className="article-container">
      <ul>
        {articles.map((article) => (
            <div>
          <li key={article.article_id} className="article-card">
            {article.title}
            <br />
            {article.author}
            <br />
            {article.topic}
            <br />
            Id{article.article_id}
            <br />
            {article.comment_count} Comments
            <br />
            {article.votes} Votes
          </li>
          <button>View Article</button>
          <button>Edit Article</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
