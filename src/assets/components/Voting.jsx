import {  useState } from "react";
import { useParams } from "react-router-dom";
import {  updateArticleVotes } from "../../utils";

export default function Voting({setVoteCount}) {
    const {article_id} = useParams()
    const [voted, setVoted] = useState(false)



function handleVote(direction) {
    if (voted){
        setVoted(true)
    }
    setVoteCount((prevVoteCount) => direction === "upvote" ? prevVoteCount + 1 : prevVoteCount -1)
    updateArticleVotes(article_id, direction).then(()=> {
        setVoted(true)
    })
}
    
    return (
        <div>
        <button onClick={() => handleVote("upvote")} disabled={voted}>♡</button>
        <button onClick={() => handleVote("downvote")} disabled={voted}>👎</button>
</div>
    )
}