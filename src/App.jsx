import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Articles from './assets/components/Articles'
import ViewArticle from './assets/components/ViewArticle'
import { Topics } from './assets/components/Topics'
import Users from './assets/components/Users'
import { UnknownPage } from './assets/components/UnknownPage'
import UserDisplay from './assets/components/UserDisplay'


function App() {
  const [user, setCurrentUser] = useState({})

return (

  <>
  <h1 className='header'>NC News</h1>
  <Navbar/>
  <UserDisplay user={user} element={UserDisplay}/>
  <Routes>
    <Route path="/" element={<Articles/>}/>
    <Route path="/articles" element={<Articles/>}/>
    <Route path="/view-article/:article_id" element={<ViewArticle user={user}/>}/>
    <Route path="/topics" element={<Topics/>}/>
    <Route path="/articles/:topic" element={<Articles />} />
    <Route path="/users" element={<Users setCurrentUser={setCurrentUser} />} />
    <Route path="*" element={<UnknownPage/>}/>
  </Routes>
  </>
)
}

export default App
