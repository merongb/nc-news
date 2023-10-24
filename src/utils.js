import axios from "axios"

const api = axios.create({baseURL: "https://news-article-slsk.onrender.com/api"})

export function getArticles() {
    return api.get('/articles').then((res) => {
        return res.data
    })
}

export function getArticleById (article_id){
    return api.get(`/articles/${article_id}`).then((res) => {
        return res.data
    })
}
export function getCommentByArticleId(article_id){
    return api.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data
    })
}
export function updateArticleVotes(article_id, voteType){
    const data = {inc_votes: voteType === "upvote" ? 1 : -1}
return api.patch(`/articles/${article_id}`, data).then((res) => {
    return res.data
})
}