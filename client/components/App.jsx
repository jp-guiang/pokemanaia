import React, { useState } from 'react'

import Start from './Start'
import Battle from './Battle'
import Footer from './Footer'
import Profile from './Profile'
import Credits from './Credits'
import Switch from './Switch'
import ResponsiveAppBar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Pair from './Pair'

const App = () => {
  const [start, setStart] = useState(true)

  function startGame() {
    setTimeout(() => {
      setStart(false)
    }, 2000)
  }

  if (start) {
    return (
      <div id="startScreen" onClick={startGame}>
        <Start />
      </div>
    )
  } else {
    return (
      <div id="whole-app">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Switch />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Credits" element={<Credits />} />
        </Routes>

        {/* <Home /> */}
        <Pair />
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App
