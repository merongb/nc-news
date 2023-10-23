import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Articles from './assets/components/Articles'

function App() {
  const [count, setCount] = useState(0)

return (

  <>
  <h1>NC News</h1>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Articles/>}/>
  </Routes>
  </>
)
}

export default App
