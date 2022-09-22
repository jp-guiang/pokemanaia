import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOppHp, setOppAtk } from '../actions/JV.js'
import { setPokeHp, setMyDef } from '../actions/myPokemon.js'

function Battle() {
  const myPokemon = useSelector((state) => state.myPokemon[0])
  const JVPokemon = useSelector((state) => state.JV[0])
  const dispatch = useDispatch()
  const myPokemonImg = myPokemon.sprites.back_default
  const oppPokemonImg = JVPokemon.sprites.front_default

  const myHP = myPokemon.stats[0].base_stat
  const myAttack = myPokemon.stats[1].base_stat
  const myDefense = myPokemon.stats[2].base_stat
  const myType = myPokemon.types[0].type.name

  const oppHP = JVPokemon.stats[0].base_stat
  const oppAttack = JVPokemon.stats[1].base_stat
  const oppDefense = JVPokemon.stats[2].base_stat
  const oppType = JVPokemon.types[0].type.name

  const effective1 = 1
  const effective2 = 1

  const [winState, setWinState] = useState('fight')
  const [initOppHP, setInitOppHP] = useState(oppHP)
  const [initMyHP, setInitMyHP] = useState(myHP)
  const [oppHPBar, setOppHPBar] = useState(200)
  const [myHPBar, setMyHPBar] = useState(200)

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
    const finalHP = Math.round(JVPokemon.stats[0].base_stat - dmg)
    const percentDmg = Math.round((dmg / initOppHP) * 200)
    setOppHPBar(oppHPBar - percentDmg)
    dispatch(setOppHp(finalHP, opponent))
    // setTimeout(() => {
    attackMyPkmn('normal', 70, myPokemon)
    // }, 500)
  }

  function attackMyPkmn(type, power, myPkmn) {
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
    const finalHP = Math.round(myPokemon.stats[0].base_stat - dmg)
    const percentDmg = Math.round((dmg / initMyHP) * 200)
    setMyHPBar(myHPBar - percentDmg)
    dispatch(setPokeHp(finalHP, myPkmn))
  }

  function lowerOppAtk(target) {
    if (JVPokemon.stats[1].base_stat > 8) {
      const attack = JVPokemon.stats[1].base_stat - 7
      dispatch(setOppAtk(attack, target))
    }
  }

  function raiseDefense(target) {
    if (myPokemon.stats[1].base_stat < 80) {
      const defense = myPokemon.stats[1].base_stat + 7
      dispatch(setMyDef(defense, target))
    }
  }

  useEffect(() => {
    document.getElementById('myHealthBar').style.width = myHPBar + 'px'
    if (myHPBar < 100 && myHPBar > 50) {
      document.getElementById('myHealthBar').style.backgroundColor =
        'darkgoldenrod'
    } else if (myHPBar <= 50) {
      document.getElementById('myHealthBar').style.backgroundColor = 'darkred'
    }
  }, [myHPBar])

  useEffect(() => {
    document.getElementById('oppHealthBar').style.width = oppHPBar + 'px'
    if (oppHPBar < 100 && oppHPBar > 50) {
      document.getElementById('oppHealthBar').style.backgroundColor =
        'darkgoldenrod'
    } else if (oppHPBar <= 50) {
      document.getElementById('oppHealthBar').style.backgroundColor = 'darkred'
    }
  }, [oppHPBar])

  useEffect(() => {
    if (oppHP <= 0) {
      setWinState('fainted')
    } else if (myHP <= 0) {
      setWinState('lost')
    }
  }, [oppHP, myHP])

  return (
    <div className="centering">
      <div className="battleScreen">
        <div className="pokemonSprites">
          <div className="myHP">
            <span>
              {myHP} / {initMyHP}
            </span>
          </div>
          <span className="oppPkmnName">{JVPokemon.name.toUpperCase()}</span>
          <span className="myPkmnName">{myPokemon.name.toUpperCase()}</span>
          <div id="myHealthBar"></div>
          <div className="myHealthBarBacking"></div>
          <img
            className="myHealth"
            src="/images/myHealth.png"
            alt="my health bar"
          />
          <img className="myPokemonImg" src={myPokemonImg} alt="my Pokemon" />
          <img
            className="oppPokemonImg"
            src={oppPokemonImg}
            alt="opponent Pokemon"
          />
          <div id="oppHealthBar"></div>
          <div className="oppHealthBarBacking"></div>
          <img
            className="oppHealth"
            src="/images/oppHealth.png"
            alt="opponent health bar"
          />
        </div>
        <img src="/images/carpark.png" alt="one outs in the carpark" />
        <img className="textbox" src="/images/textbox1.png" alt="textbox" />
        <div className="insideTextBox">
          <div className="fightQuestion">
            <p>What will {myPokemon.name.toUpperCase()} do?</p>
          </div>

          <div className="fightButtons">
            <button onClick={() => attackOpponent('normal', 70, JVPokemon)}>
              TACKLE
            </button>
            <button onClick={() => attackOpponent('special', 70, JVPokemon)}>
              {myType.toUpperCase()} ATTACK
            </button>
            <button onClick={() => lowerOppAtk(JVPokemon)}>GROWL</button>
            <button onClick={() => raiseDefense(myPokemon)}>
              DEFENSE CURL
            </button>
          </div>
        </div>
      </div>
      <div>
        {winState}
        {oppHP}
      </div>
    </div>
  )
}

export default Battle
