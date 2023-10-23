import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Articles from './assets/components/Articles'
import ViewArticle from './assets/components/ViewArticle'

function App() {

return (

  <>
  <h1>NC News</h1>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Articles/>}/>
    <Route path="/articles" element={<Articles/>}/>
    <Route path="/view-article/:article_id" element={<ViewArticle/>}/>
  </Routes>
  </>
)
}

export default App
