import React, { useState } from 'react'

import Home from './Home'

import World from './World'
import Battle from './Battle'

const App = () => {
  const [showWorld, setShowWorld] = useState(false)

  function aWholeNewWorld(event) {
    setShowWorld(!showWorld)
    console.log('a whole new world')
  }
  return (
    <div>
      <h1>Choose your Pokemon!</h1>
      {!showWorld && <Home fn={aWholeNewWorld} />}
      {/* {showWorld && <World />} */}
      {showWorld && <h1>fufdufeu</h1>}
      <h1>Pokemon</h1>

      {/* <Battle />
      <World /> */}
    </div>
  )
}

export default App
