import React, { useState } from 'react'
// import World from './World'
import Pokemon from './Pokemon'

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
    </div>
  )
}

export default App
