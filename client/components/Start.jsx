import React from 'react'
const pikachu = new Audio('/fightsounds/pikachu-starter.mp3')

function startScreen() {
  function disappear() {
    pikachu.volume = 0.4
    pikachu.currentTime = 0
    pikachu.play()
  }
  return (
    <div className="startScreen" onClick={disappear}>
      <img
        id="startGif"
        src="/images/start.gif"
        alt="japanese pokemon start screen"
      />
      <p className="pressStart">Press Start</p>
    </div>
  )
}

export default startScreen
