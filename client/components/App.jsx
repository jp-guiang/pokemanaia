import React, { useState } from 'react'

import Home from './Home'

import World from './World'
import Battle from './Battle'
import Footer from './Footer'
import Navbar from './Navbar'

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
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
