import React, { useState } from 'react'

import Home from './Home'

import World from './World'
import Battle from './Battle'
import Footer from './Footer'
import Navbar from './Navbar'
import Profile from './Profile'
import About from './About'
import Credits from './Credits'
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
      <Navbar />
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
