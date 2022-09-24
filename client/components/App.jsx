import React, { useState } from 'react'

import Home from './Home'

import World from './World'
import Battle from './Battle'
import Footer from './Footer'

const App = () => {
  const [showWorld, setShowWorld] = useState(false)

  function aWholeNewWorld(event) {
    setShowWorld(!showWorld)
    console.log('a whole new world')
  }
  function themeSongPlay() {
    var audio = new Audio('themeSong.mp3')
    audio.play()
  }

  return (
    <div className="whole-app">
      {themeSongPlay()}
      <h1>Choose your Pokémon!</h1>
      {!showWorld && (
        <div>
          <Home fn={aWholeNewWorld} />
        </div>
      )}
      {showWorld && <Battle />}

      {/* <Battle /> */}
      {/* <World /> */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
