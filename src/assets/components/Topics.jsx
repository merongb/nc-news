import { useState, useEffect } from "react";
import { getTopics } from "../../utils";
import { Link } from "react-router-dom";


export function Topics() {
    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTopics().then((res) => {
            setTopics(res.topics)
            setLoading(false)
        })
    }, [])


    if(loading){
        return <div className="loader"></div>
    }
    return (
        <div className="topic-container">
        <ul className="topic-list">
            {topics.map((topic) => (
                <li   key={topic.description}>
                    <Link className={topic.slug} style={{ textDecoration: "none" }} to={`/articles/${topic.slug}`}>
                        <div className="banner-item">
                            <h1>{topic.slug}</h1> 
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}