import React, { useState, useEffect } from 'react'

function Battle() {
  const [hp, setHp] = useState(35)
  const [winState, setWinState] = useState('fight')
  // grab your pokemon stats/moves from state
  // grab opponent pokemon stats/moves from state

  const attack = 55
  const defense = 40
  const power = 50
  let STAB = 1
  const effective1 = 1
  const effective2 = 1

  function attackOpponent(type, power) {
    const critRnd = Math.random()
    const random = Math.round(Math.floor(Math.random() * 39 + 218) / 255)
    let critVal = (2 * 1 * 1) / 5 + 2
    if (critRnd <= 0.0625) {
      critVal = (2 * 1 * 2) / 5 + 2
    }
    if (type == 'electric') {
      STAB = STAB * 1.5
    }
    const dmg =
      ((critVal * power * (attack / defense)) / 50 + 2) *
      STAB *
      effective1 *
      effective2 *
      random
    setHp(hp - Math.round(dmg))
  }

  useEffect(() => {
    if (hp <= 0) {
      setWinState('fainted')
    }
  }, [hp])

  return (
    <div>
      <div className="battleScreen">
        <img src="/images/image.png" alt="one outs in the carpark" />
        <img className="textbox" src="/images/textbox1.png" alt="textbox" />
        <div className="insideTextBox">
          <div>
            {winState}
            {hp}
          </div>
          <div className="buttons">
            <button onClick={() => attackOpponent('normal', 50)}>Tackle</button>
            <button onClick={() => attackOpponent('electric', 70)}>
              Electric Shock
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Battle
