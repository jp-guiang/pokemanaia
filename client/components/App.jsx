import React, { useState } from 'react'

import Home from './Home'
import Start from './Start'
import World from './World'
import Battle from './Battle'
import Footer from './Footer'
import Profile from './Profile'
import About from './About'
import Credits from './Credits'
import ResponsiveAppBar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Pair from './Pair'

const App = () => {
  const [showWorld, setShowWorld] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [start, setStart] = useState(true)

  function aWholeNewWorld(event) {
    setShowWorld(!showWorld)
    setGameStarted(true)
    console.log('a whole new world')
  }

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
          <Route path="Profile" element={<Profile />} />
          <Route path="About" element={<About />} />
          <Route path="Credits" element={<Credits />} />
        </Routes>
        {!showWorld && (
          <div>
            <Home fn={aWholeNewWorld} />
          </div>
        )}
        {showWorld && (
          <World gameStarted={gameStarted} showWorld={setShowWorld} />
        )}
        <Pair />
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App
