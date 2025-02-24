import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_Signup from './pages/Login-Signup/Login_Signup'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Bottom from './components/Bottom'
import NotFound from './components/NotFound'
import Reels from './pages/Reels/Reels'
import Search from './pages/Search/Search'
import VideoComponent from './pages/videoPlay/Videoplay'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login_Signup />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/reels" element={<Reels />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/video" element={<VideoComponent />}/>
      <Route path="*" element={<NotFound />}/>
      
    </Routes>
    <Bottom/>
  </BrowserRouter>
  )
}

export default App