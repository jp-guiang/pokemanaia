import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOppHp, setOppAtk, setOppDef } from '../actions/JV.js'
import { setPokeHp, setMyDef, setMyAtk } from '../actions/myPokemon.js'

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

  const [count, setCount] = useState(0)

  const [winState, setWinState] = useState('fight')
  const [initOppHP, setInitOppHP] = useState(oppHP)
  const [initMyHP, setInitMyHP] = useState(myHP)
  const [oppHPBar, setOppHPBar] = useState(200)
  const [myHPBar, setMyHPBar] = useState(200)
  const [fightText, setFightText] = useState(
    `What will ${myPokemon.name.toUpperCase()} do?`
  )

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
      setFightText(
        `${myPokemon.name.toUpperCase()} used ${myType.toUpperCase()} ATTACK`
      )
      document.getElementById('orb').style.visibility = 'visible'
      document.getElementById('orb').style.left = '570px'
      document.getElementById('orb').style.top = '130px'
      setTimeout(() => {
        document.getElementById('orb').style.left = '200px'
        document.getElementById('orb').style.top = '300px'
        document.getElementById('orb').style.visibility = 'hidden'
      }, 550)
    } else if (type == 'normal') {
      STAB = 1
      setFightText(`${myPokemon.name.toUpperCase()} used TACKLE`)
      document.getElementById('myPokemonImg').style.left = '145px'
      setTimeout(() => {
        document.getElementById('myPokemonImg').style.left = '25px'
      }, 350)
    }
    const dmg =
      ((critVal * power * (myAttack / oppDefense)) / 50 + 2) *
      STAB *
      effective1 *
      effective2 *
      random
    const finalHP = Math.round(JVPokemon.stats[0].base_stat - dmg)
    const percentDmg = Math.round((dmg / initOppHP) * 200)
    setTimeout(() => {
      setOppHPBar(oppHPBar - percentDmg)
      dispatch(setOppHp(finalHP, opponent))
    }, 700)
    setTimeout(() => {
      const atkRndm = Math.random()
      if (atkRndm >= 0.4) {
        attackMyPkmn(70, myPokemon)
      } else if (atkRndm < 0.4 && atkRndm >= 0.2) {
        lowerMyAtk(myPokemon)
      } else if (atkRndm < 0.2) {
        raiseOppDefense(JVPokemon)
      }
    }, 1500)
  }

  function attackMyPkmn(power, myPkmn) {
    let STAB = 1
    const critRnd = Math.random()
    const type = Math.random()
    const random = Math.round(Math.floor(Math.random() * 39 + 218) / 255)
    let critVal = (2 * 1 * 1) / 5 + 2
    if (critRnd <= 0.0625) {
      critVal = (2 * 1 * 2) / 5 + 2
    }
    if (type < 0.5) {
      STAB = 1.5
      setFightText(
        `${JVPokemon.name.toUpperCase()} used ${oppType.toUpperCase()} ATTACK`
      )
      document.getElementById('ball').style.visibility = 'visible'
      document.getElementById('ball').style.left = '200px'
      document.getElementById('ball').style.top = '300px'
      setTimeout(() => {
        document.getElementById('ball').style.left = '570px'
        document.getElementById('ball').style.top = '130px'
        document.getElementById('ball').style.visibility = 'hidden'
      }, 550)
    } else if (type >= 0.5) {
      setFightText(`${JVPokemon.name.toUpperCase()} used TACKLE`)
      STAB = 1
      document.getElementById('oppPokemonImg').style.left = '430px'
      setTimeout(() => {
        document.getElementById('oppPokemonImg').style.left = '505px'
      }, 350)
    }
    const dmg =
      ((critVal * power * (myAttack / oppDefense)) / 50 + 2) *
      STAB *
      effective1 *
      effective2 *
      random
    const finalHP = Math.round(myPokemon.stats[0].base_stat - dmg)
    const percentDmg = Math.round((dmg / initMyHP) * 200)
    setTimeout(() => {
      setMyHPBar(myHPBar - percentDmg)
    }, 700)
    dispatch(setPokeHp(finalHP, myPkmn))
    setTimeout(() => {
      if (critRnd <= 0.0625) {
        setFightText('Critical hit!')
      }
    }, 700)
    setTimeout(() => {
      setFightText(`What will ${myPokemon.name.toUpperCase()} do?`)
    }, 1500)
  }

  function lowerOppAtk(target) {
    if (JVPokemon.stats[1].base_stat > 8) {
      const attack = JVPokemon.stats[1].base_stat - 7
      dispatch(setOppAtk(attack, target))
      setFightText(`${myPokemon.name.toUpperCase()} used GROWL`)
      document.getElementById('myGrowl').style.visibility = 'visible'
      setTimeout(() => {
        document.getElementById('myGrowl').style.visibility = 'hidden'
      }, 1250)
    }
    setTimeout(() => {
      const atkRndm = Math.random()
      if (atkRndm >= 0.4) {
        attackMyPkmn(70, myPokemon)
      } else if (atkRndm < 0.4 && atkRndm >= 0.2) {
        lowerMyAtk(myPokemon)
      } else if (atkRndm < 0.2) {
        raiseOppDefense(JVPokemon)
      }
    }, 1500)
  }

  function raiseDefense(target) {
    if (myPokemon.stats[2].base_stat < 80) {
      const defense = myPokemon.stats[1].base_stat + 7
      dispatch(setMyDef(defense, target))
      setFightText(`${myPokemon.name.toUpperCase()} used DEFENSE CURL`)
      document.getElementById('myShield').style.visibility = 'visible'
      setTimeout(() => {
        document.getElementById('myShield').style.visibility = 'hidden'
      }, 1250)
    }
    setTimeout(() => {
      const atkRndm = Math.random()
      if (atkRndm >= 0.4) {
        attackMyPkmn(70, myPokemon)
      } else if (atkRndm < 0.4 && atkRndm >= 0.2) {
        lowerMyAtk(myPokemon)
      } else if (atkRndm < 0.2) {
        raiseOppDefense(JVPokemon)
      }
    }, 1500)
  }

  function lowerMyAtk(target) {
    if (myPokemon.stats[1].base_stat > 8) {
      const attack = myPokemon.stats[1].base_stat - 7
      dispatch(setMyAtk(attack, target))
      setFightText(`${JVPokemon.name.toUpperCase()} used GROWL`)
      document.getElementById('oppGrowl').style.visibility = 'visible'
      setTimeout(() => {
        document.getElementById('oppGrowl').style.visibility = 'hidden'
      }, 1250)
    }
    setTimeout(() => {
      setFightText(`What will ${myPokemon.name.toUpperCase()} do?`)
    }, 1500)
  }

  function raiseOppDefense(target) {
    if (JVPokemon.stats[1].base_stat < 80) {
      const defense = JVPokemon.stats[1].base_stat + 7
      dispatch(setOppDef(defense, target))
      setFightText(`${JVPokemon.name.toUpperCase()} used DEFENSE CURL`)
      document.getElementById('oppShield').style.visibility = 'visible'
      setTimeout(() => {
        document.getElementById('oppShield').style.visibility = 'hidden'
      }, 1250)
      setTimeout(() => {
        setFightText(`What will ${myPokemon.name.toUpperCase()} do?`)
      }, 1500)
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
    setCount(count + 1)
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
          <img id="myPokemonImg" src={myPokemonImg} alt="my Pokemon" />
          <img id="orb" src="/images/orb.png" alt="orb of light" />
          <img id="ball" src="/images/ball.png" alt="ball of light" />
          <img id="myGrowl" src="/images/growl.gif" alt="growl lines" />
          <img id="oppGrowl" src="/images/growl.gif" alt="growl lines" />
          <img
            id="myShield"
            src="/images/force-shield.gif"
            alt="opponent forcefield"
          />
          <img
            id="oppShield"
            src="/images/force-shield.gif"
            alt="my forcefield"
          />
          <img id="oppPokemonImg" src={oppPokemonImg} alt="opponent Pokemon" />
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
            <p>{fightText}</p>
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
