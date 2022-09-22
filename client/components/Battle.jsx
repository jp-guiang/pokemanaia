import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOppHp } from '../actions/JV.js'

function Battle() {
  const myPokemon = useSelector((state) => state.myPokemon)
  const JVPokemon = useSelector((state) => state.JV)
  const dispatch = useDispatch()

  const [winState, setWinState] = useState('fight')

  const myHP = myPokemon[0].stats[0].base_stat
  const myAttack = myPokemon[0].stats[1].base_stat
  const myDefense = myPokemon[0].stats[2].base_stat

  const oppHP = JVPokemon[0].stats[0].base_stat
  const oppAttack = JVPokemon[0].stats[1].base_stat
  const oppDefense = JVPokemon[0].stats[2].base_stat

  const effective1 = 1
  const effective2 = 1

  function attackOpponent(type, power, opponent) {
    let STAB = 1
    const critRnd = Math.random()
    const random = Math.round(Math.floor(Math.random() * 39 + 218) / 255)
    let critVal = (2 * 1 * 1) / 5 + 2
    if (critRnd <= 0.0625) {
      critVal = (2 * 1 * 2) / 5 + 2
    }
    if (type == 'special') {
      STAB = 1.5
    } else if (type == 'normal') {
      STAB = 1
    }
    const dmg =
      ((critVal * power * (myAttack / oppDefense)) / 50 + 2) *
      STAB *
      effective1 *
      effective2 *
      random
    const finalHP = Math.round(JVPokemon[0].stats[0].base_stat - dmg)
    dispatch(setOppHp(finalHP, opponent))
    console.log('attackOpp: ', finalHP)
  }

  useEffect(() => {
    if (myHP <= 0) {
      setWinState('fainted')
    }
  }, [myHP])

  return (
    <div>
      <div className="battleScreen">
        <img src="/images/image.png" alt="one outs in the carpark" />
        <img className="textbox" src="/images/textbox1.png" alt="textbox" />
        <div className="insideTextBox">
          <div>
            {winState}
            {oppHP}
          </div>
          <div className="buttons">
            <button onClick={() => attackOpponent('normal', 70, JVPokemon[0])}>
              Tackle
            </button>
            <button onClick={() => attackOpponent('special', 70, JVPokemon[0])}>
              Electric Shock
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Battle
