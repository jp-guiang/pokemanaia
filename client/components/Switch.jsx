import React, { useState } from 'react'

import Home from './Home'
import World from './World'

export default function Switch() {
  const [showWorld, setShowWorld] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  function aWholeNewWorld() {
    setShowWorld(!showWorld)
    setGameStarted(true)
    console.log('a whole new world')
  }

  return (
    <div>
      {!showWorld && (
        <div>
          <Home fn={aWholeNewWorld} />
        </div>
      )}
      {showWorld && (
        <World gameStarted={gameStarted} showWorld={setShowWorld} />
      )}
    </div>
  )
}
