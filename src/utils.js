import axios from "axios"

const api = axios.create({baseURL: "https://news-article-slsk.onrender.com/api"})

export function getArticles() {
    return api.get('/articles').then((res) => {
        return res.data
    })
}