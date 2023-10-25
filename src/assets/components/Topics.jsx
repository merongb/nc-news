import { useState, useEffect } from "react";
import { getTopics } from "../../utils";
import { Link } from "react-router-dom";


export function Topics() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((res) => {
            setTopics(res.topics)
        })
    }, [])

    return (
        <ul>
            {topics.map((topic) => (
                <li key={topic.description}>
                <h1><Link to={topic.slug}>{topic.slug}</Link></h1>
                </li>
            ))}
        </ul>
    )
}