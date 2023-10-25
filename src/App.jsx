import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Articles from './assets/components/Articles'
import ViewArticle from './assets/components/ViewArticle'
import { Topics } from './assets/components/Topics'
import { Coding } from './assets/components/Coding'
import { Football } from './assets/components/Football'
import { Cooking } from './assets/components/Cooking'

function App() {

return (

  <>
  <h1>NC News</h1>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Articles/>}/>
    <Route path="/articles" element={<Articles/>}/>
    <Route path="/view-article/:article_id" element={<ViewArticle/>}/>
    <Route path="/topics" element={<Topics/>}/>
    <Route path="/topics/coding" element={<Coding/>}/>
    <Route path="/topics/football" element={<Football/>}/>
    <Route path="/topics/cooking" element={<Cooking/>}/>
  </Routes>
  </>
)
}

export default App
