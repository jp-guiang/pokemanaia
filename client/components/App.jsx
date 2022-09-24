import React, { useState } from 'react'

import Pokemon from './Pokemon'

import World from './World'
import Battle from './Battle'

const App = () => {
  const [showWorld, setShowWorld] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  function aWholeNewWorld(event) {
    setShowWorld(!showWorld)
    setGameStarted(true)
    console.log('a whole new world')
  }
  return (
    <div>
      <h1>Choose your Pokemon!</h1>
      {!showWorld && <Pokemon fn={aWholeNewWorld} />}
      {showWorld && (
        <World gameStarted={gameStarted} showWorld={setShowWorld} />
      )}

      <h1>Pokemon</h1>

      {/* <Battle />
      <World /> */}
      {/* <Newworld /> */}
    </div>
  )
}

export default App
