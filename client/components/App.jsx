import React, { useState } from 'react'

import Home from './Home'

import World from './World'
import Battle from './Battle'
import Footer from './Footer'
import Profile from './Profile'
import About from './About'
import Credits from './Credits'
import ResponsiveAppBar from './Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [showWorld, setShowWorld] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  function aWholeNewWorld(event) {
    setShowWorld(!showWorld)
    setGameStarted(true)
    console.log('a whole new world')
  }

  return (
    <div className="whole-app">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
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
        // <Battle />
      )}

      {/* <Battle /> */}
      {/* <World /> */}

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
