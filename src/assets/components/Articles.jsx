import { useState, useEffect } from "react";
import { getArticles } from "../../utils";
import { Link, useParams } from "react-router-dom";


export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)
  const { topic } = useParams()
  const [sortBy, setSortBy] = useState("created_at")
  const [order, setOrder] = useState("desc")
  const [error, setError] = useState(null)


  useEffect(() => {
    getArticles(topic, sortBy, order).then((response) => {
      setArticles(response.articles)
      setLoading(false)
    }).catch((error) => {
      setError(error.response.data.message);
  })
  }, [topic, sortBy, order])

  function changeSortby(event) {
    setSortBy(event.target.value)
  }
  function changeOrder(event) {
    setOrder(event.target.value)
  }

  if (error === "Topic Doesn't Exist!"){
    return (
        <section>
        <h3>{error}</h3>
        <p>Return to <button><Link to="/topics"> Topics</Link></button></p>
        </section>
    )
}

  if(loading){
    return <p>Loading...</p>
}
  return (
    <section className="article-container">
      <select value={sortBy} onChange={changeSortby}> Sort By
      <option value="created_at">Date Published (default)</option>
      <option value="votes">Votes</option>
      <option value="comment_count">Comments</option>
      </select>
      <select value={order} onChange={changeOrder}>
        <option value="desc">Descending (default)</option>
        <option value="asc">Ascending</option>
      </select>
      <br />
      <ul >
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
            Published on {new Date(article.created_at).toLocaleString()}
            <br />
            <Link to={`/view-article/${article.article_id}`}>
                <button>View Article</button>
              </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
