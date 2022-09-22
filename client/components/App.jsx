import React, { useState } from 'react'

import Pokemon from './Pokemon'

import World from './World'
import Battle from './Battle'

const App = () => {
  const [showWorld, setShowWorld] = useState(false)

  function aWholeNewWorld(event) {
    event.preventDefault()
    setShowWorld(!showWorld)
    console.log(team)
  }
  return (
    <div>
      <button onClick={aWholeNewWorld}>Confirm</button>
      <h1>Choose your Pokemon!</h1>
      {!showWorld && <Pokemon />}
      {/* {showWorld && <World />} */}
      {showWorld && <p>TESTERSAERGAAG</p>}
      <h1>Pokemon</h1>

      {/* commenting these out for now cause pc breaky -jp */}
      {/* <Battle />
      <World /> */}
    </div>
  )
}

export default App
