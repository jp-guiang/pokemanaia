import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setJVHp, setJVAtk, setJVDef } from '../actions/JV.js'
import { setDvdHp, setDvdAtk, setDvdDef } from '../actions/david.js'
import { setPokeHp, setMyDef, setMyAtk, swapOut } from '../actions/myPokemon.js'

function Battle(props) {
  const fakeProps = 'David'

  const [oppCount, setOppCount] = useState(0)
  const [myCount, setMyCount] = useState(0)
  const [oppIndex, setOppIndex] = useState(0)
  const [myIndex, setMyIndex] = useState(0)
  const myPokemon = useSelector((state) => state.myPokemon[myIndex])
  const team = useSelector((state) => state.myPokemon.length)
  const dispatch = useDispatch()
  let oppPokemon
  let oppTeam

  switch (fakeProps) {
    case 'JV':
      oppPokemon = useSelector((state) => state.JV[oppIndex])
      oppTeam = useSelector((state) => state.JV.length)
      break
    case 'David':
      oppPokemon = useSelector((state) => state.david[oppIndex])
      oppTeam = useSelector((state) => state.david.length)
      break
    default:
      oppPokemon = useSelector((state) => state.JV[oppIndex])
      oppTeam = useSelector((state) => state.JV.length)
  }

  const myPokemonImg = myPokemon.sprites.back_default
  const oppPokemonImg = oppPokemon.sprites.front_default

  const myHP = myPokemon.stats[0].base_stat
  const myAttack = myPokemon.stats[1].base_stat
  const myDefense = myPokemon.stats[2].base_stat
  const myType = myPokemon.types[0].type.name
  const myType2 = myPokemon.types[1]?.type.name

  const oppHP = oppPokemon.stats[0].base_stat
  const oppAttack = oppPokemon.stats[1].base_stat
  const oppDefense = oppPokemon.stats[2].base_stat
  const oppType = oppPokemon.types[0].type.name
  const oppType2 = oppPokemon.types[1]?.type.name

  const [count, setCount] = useState(0)

  const [initOppHP, setInitOppHP] = useState(oppHP)
  const [initMyHP, setInitMyHP] = useState(myHP)
  const [oppHPBar, setOppHPBar] = useState(200)
  const [myHPBar, setMyHPBar] = useState(200)
  const [fightText, setFightText] = useState(
    `What will ${myPokemon.name.toUpperCase()} do?`
  )

  let effective = 1
  // logic for effectiveness

  function calcMultiplyer(attackingType, defendingType) {
    switch (attackingType) {
      case 'normal':
        switch (defendingType) {
          case 'rock':
            effective = 0.5
            break
          case 'ghost':
            effective = 0
            break
        }
        break
      case 'fighting':
        switch (defendingType) {
          case 'normal':
          case 'rock':
          case 'ice':
            effective = 2
            break
          case 'flying':
          case 'poison':
          case 'bug':
          case 'psychic':
            effective = 0.5
            break
          case 'ghost':
            effective = 0
            break
        }
        break
      case 'flying':
        switch (defendingType) {
          case 'fighting':
          case 'bug':
          case 'grass':
            effective = 2
            break
          case 'rock':
          case 'electric':
            effective = 0.5
            break
        }
        break
      case 'poison':
        switch (defendingType) {
          case 'bug':
          case 'grass':
            effective = 2
            break
          case 'rock':
          case 'ground':
          case 'poison':
          case 'ghost':
            effective = 0.5
            break
        }
        break
      case 'ground':
        switch (defendingType) {
          case 'poison':
          case 'rock':
          case 'fire':
          case 'electric':
            effective = 2
            break
          case 'bug':
          case 'grass':
            effective = 0.5
            break
          case 'flying':
            effective = 0
            break
        }
        break
      case 'rock':
        switch (defendingType) {
          case 'flying':
          case 'bug':
          case 'fire':
          case 'ice':
            effective = 2
            break
          case 'ground':
          case 'fighting':
            effective = 0.5
            break
        }
        break
      case 'bug':
        switch (defendingType) {
          case 'poison':
          case 'grass':
          case 'psychic':
            effective = 2
            break
          case 'flying':
          case 'fighting':
          case 'ghost':
          case 'fire':
            effective = 0.5
            break
        }
        break
      case 'ghost':
        switch (defendingType) {
          case 'psychic':
            effective = 2
            break
          case 'normal':
            effective = 0
            break
        }
        break
      case 'fire':
        switch (defendingType) {
          case 'bug':
          case 'grass':
          case 'ice':
            effective = 2
            break
          case 'rock':
          case 'fire':
          case 'water':
          case 'dragon':
            effective = 0.5
            break
        }
        break
      case 'water':
        switch (defendingType) {
          case 'ground':
          case 'rock':
          case 'fire':
            effective = 2
            break
          case 'grass':
          case 'water':
          case 'dragon':
            effective = 0.5
            break
        }
        break
      case 'grass':
        switch (defendingType) {
          case 'ground':
          case 'rock':
          case 'water':
            effective = 2
            break
          case 'flying':
          case 'poison':
          case 'bug':
          case 'fire':
          case 'grass':
          case 'dragon':
            effective = 0.5
            break
        }
        break
      case 'electric':
        switch (defendingType) {
          case 'flying':
          case 'water':
            effective = 2
            break
          case 'electric':
          case 'grass':
          case 'dragon':
            effective = 0.5
            break
          case 'ground':
            effective = 0
            break
        }
        break
      case 'psychic':
        switch (defendingType) {
          case 'fighting':
          case 'poison':
            effective = 2
            break
          case 'bug':
          case 'ghost':
          case 'psychic':
            effective = 0.5
            break
        }
        break
      case 'ice':
        switch (defendingType) {
          case 'flying':
          case 'ground':
          case 'grass':
          case 'dragon':
            effective = 2
            break
          case 'water':
          case 'ice':
            effective = 0.5
            break
        }
        break
      case 'dragon':
        switch (defendingType) {
          case 'dragon':
            effective = 2
            break
        }
        break
    }
    return effective
  }

  function attackOpponent(type, power, opponent) {
    let multiplyer1 = 1
    let multiplyer2 = 1
    if (oppType2) {
      multiplyer2 = calcMultiplyer(myType, oppType2)
    }
    let STAB = 1
    const critRnd = Math.random()
    const random = Math.round(Math.floor(Math.random() * 39 + 218) / 255)
    let critVal = (2 * 1 * 1) / 5 + 2
    if (critRnd <= 0.0625) {
      critVal = (2 * 1 * 2) / 5 + 2
    }
    if (type == 'special') {
      multiplyer1 = calcMultiplyer(myType, oppType)
      if (oppType2) {
        multiplyer2 = calcMultiplyer(myType, oppType2)
      }
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
      multiplyer1 *
      multiplyer2 *
      random
    const finalHP = Math.round(oppPokemon.stats[0].base_stat - dmg)
    const percentDmg = Math.round((dmg / initOppHP) * 200)
    setTimeout(() => {
      if (finalHP > 0) {
        setOppHPBar(oppHPBar - percentDmg)
      } else {
        setOppHPBar(0)
      }
      switch (fakeProps) {
        case 'JV':
          dispatch(setJVHp(finalHP, opponent))
          break
        case 'David':
          dispatch(setDvdHp(finalHP, opponent))
          break
      }
    }, 700)
    setTimeout(() => {
      if (critRnd <= 0.0625) {
        setFightText('Critical hit!')
      } else if (multiplyer1 * multiplyer2 > 1 && critRnd > 0.0625) {
        setFightText('It was super effective!')
      } else if (multiplyer1 * multiplyer2 < 1 && critRnd > 0.0625) {
        setFightText(`It wasn't very effective...`)
      } else if (multiplyer1 * multiplyer2 == 0) {
        setFightText(`It has no effect`)
      }
    }, 700)
    if (finalHP < 1) {
      setTimeout(() => {
        setFightText(`${oppPokemon.name.toUpperCase()} has fainted`)
        document.getElementById('oppPokemonImg').style.left = '800px'
      }, 2500)
    } else {
      setTimeout(() => {
        const atkRndm = Math.random()
        if (atkRndm >= 0.3) {
          attackMyPkmn(70, myPokemon)
        } else if (atkRndm < 0.3 && atkRndm >= 0.15) {
          lowerMyAtk(myPokemon)
        } else if (atkRndm < 0.15) {
          raiseOppDefense(oppPokemon)
        }
      }, 1500)
    }
  }

  function attackMyPkmn(power, myPkmn) {
    let oppMultiplyer1 = 1
    let oppMultiplyer2 = 1
    let STAB = 1
    const critRnd = Math.random()
    const type = Math.random()
    const random = Math.round(Math.floor(Math.random() * 39 + 218) / 255)
    let critVal = (2 * 1 * 1) / 5 + 2
    if (critRnd <= 0.0625) {
      critVal = (2 * 1 * 2) / 5 + 2
    }
    if (type < 0.5) {
      oppMultiplyer1 = calcMultiplyer(oppType, myType)
      if (myType2) {
        oppMultiplyer2 = calcMultiplyer(oppType, myType2)
      }
      STAB = 1.5
      setFightText(
        `${oppPokemon.name.toUpperCase()} used ${oppType.toUpperCase()} ATTACK`
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
      setFightText(`${oppPokemon.name.toUpperCase()} used TACKLE`)
      STAB = 1
      document.getElementById('oppPokemonImg').style.left = '430px'
      setTimeout(() => {
        document.getElementById('oppPokemonImg').style.left = '505px'
      }, 350)
    }
    const dmg =
      ((critVal * power * (oppAttack / myDefense)) / 50 + 2) *
      STAB *
      oppMultiplyer1 *
      oppMultiplyer2 *
      random
    const finalHP = Math.round(myPokemon.stats[0].base_stat - dmg)
    const percentDmg = Math.round((dmg / initMyHP) * 200)
    setTimeout(() => {
      if (finalHP > 0) {
        setMyHPBar(myHPBar - percentDmg)
      } else {
        setMyHPBar(0)
      }
      dispatch(setPokeHp(finalHP, myPkmn))
    }, 700)
    setTimeout(() => {
      if (critRnd <= 0.0625) {
        setFightText('Critical hit!')
      } else if (oppMultiplyer1 * oppMultiplyer2 > 1 && critRnd > 0.0625) {
        setFightText('It was super effective!')
      } else if (oppMultiplyer1 * oppMultiplyer2 < 1 && critRnd > 0.0625) {
        setFightText(`It wasn't very effective...`)
      } else if (oppMultiplyer1 * oppMultiplyer2 == 0) {
        setFightText(`It had no effect`)
      }
    }, 700)
    setTimeout(() => {
      setFightText(`What will ${myPokemon.name.toUpperCase()} do?`)
    }, 1500)
    if (finalHP < 1) {
      setTimeout(() => {
        setFightText(`${myPokemon.name.toUpperCase()} has fainted`)
        document.getElementById('myPokemonImg').style.left = '-400px'
      }, 2500)
    }
  }

  function lowerOppAtk(target) {
    if (oppPokemon.stats[1].base_stat > 8) {
      const attack = oppPokemon.stats[1].base_stat - 7
      switch (fakeProps) {
        case 'JV':
          dispatch(setJVAtk(attack, target))
          break
        case 'David':
          dispatch(setDvdAtk(attack, target))
          break
      }
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
        raiseOppDefense(oppPokemon)
      }
    }, 1500)
  }

  function raiseDefense(target) {
    if (myPokemon.stats[2].base_stat < 200) {
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
      if (atkRndm >= 0.3) {
        attackMyPkmn(70, myPokemon)
      } else if (atkRndm < 0.3 && atkRndm >= 0.15) {
        lowerMyAtk(myPokemon)
      } else if (atkRndm < 0.15) {
        raiseOppDefense(oppPokemon)
      }
    }, 1500)
  }

  function lowerMyAtk(target) {
    if (myPokemon.stats[1].base_stat > 8) {
      const attack = myPokemon.stats[1].base_stat - 7
      dispatch(setMyAtk(attack, target))
      setFightText(`${oppPokemon.name.toUpperCase()} used GROWL`)
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
    if (oppPokemon.stats[1].base_stat < 200) {
      const defense = oppPokemon.stats[1].base_stat + 7
      switch (fakeProps) {
        case 'JV':
          dispatch(setJVDef(defense, target))
          break
        case 'David':
          dispatch(setDvdDef(defense, target))
          break
      }
      setFightText(`${oppPokemon.name.toUpperCase()} used DEFENSE CURL`)
      document.getElementById('oppShield').style.visibility = 'visible'
      setTimeout(() => {
        document.getElementById('oppShield').style.visibility = 'hidden'
      }, 1250)
      setTimeout(() => {
        setFightText(`What will ${myPokemon.name.toUpperCase()} do?`)
      }, 1500)
    }
  }

  function nextOppPokemon() {
    setOppHPBar(200)
    setTimeout(() => {
      document.getElementById('oppPokemonImg').style.left = '505px'
      setTimeout(() => {
        setFightText(`What will ${myPokemon.name.toUpperCase()} do?`)
      }, 1500)
    }, 1500)
  }

  function nextPokemon() {
    setMyHPBar(200)
    setTimeout(() => {
      document.getElementById('myPokemonImg').style.left = '25px'
      setTimeout(() => {
        setFightText(`What will ${myPokemon.name.toUpperCase()} do?`)
      }, 1500)
    }, 1500)
  }

  useEffect(() => {
    document.getElementById('myHealthBar').style.width = myHPBar + 'px'
    if (myHPBar < 100 && myHPBar > 50) {
      document.getElementById('myHealthBar').style.backgroundColor =
        'darkgoldenrod'
    } else if (myHPBar <= 50) {
      document.getElementById('myHealthBar').style.backgroundColor = 'darkred'
    } else if (myHPBar >= 100) {
      document.getElementById('myHealthBar').style.backgroundColor = 'green'
    }
  }, [myHPBar])

  useEffect(() => {
    document.getElementById('oppHealthBar').style.width = oppHPBar + 'px'
    if (oppHPBar < 100 && oppHPBar > 50) {
      document.getElementById('oppHealthBar').style.backgroundColor =
        'darkgoldenrod'
    } else if (oppHPBar <= 50) {
      document.getElementById('oppHealthBar').style.backgroundColor = 'darkred'
    } else if (oppHPBar >= 100) {
      document.getElementById('oppHealthBar').style.backgroundColor = 'green'
    }
  }, [oppHPBar])

  useEffect(() => {
    if (oppHP <= 0) {
      setTimeout(() => {
        setOppCount(oppCount + 1)
        if (oppCount < oppTeam - 1) {
          setOppIndex(oppIndex + 1)
          nextOppPokemon()
        }
      }, 1000)
    } else if (myHP <= 0) {
      setTimeout(() => {
        setMyCount(myCount + 1)
        if (myCount < team - 1) {
          setMyIndex(myIndex + 1)
          nextPokemon()
        }
      }, 1000)
    }
    setCount(count + 1)
  }, [oppHP, myHP])

  useEffect(() => {
    if (oppCount == oppTeam) {
      setTimeout(() => {
        setFightText(`${fakeProps} has been defeated!`)
        setTimeout(() => {
          setFightText(`You won 500 Dev Academy Points`)
        }, 2000)
      }, 2000)
    } else if (myCount == team) {
      setTimeout(() => {
        setFightText(`You have been defeated...`)
      }, 2000)
    }
    setCount(count + 1)
  }, [oppCount, myCount])

  useEffect(() => {
    setFightText(`Go ${oppPokemon.name.toUpperCase()}!`)
  }, [oppPokemon])

  useEffect(() => {
    setFightText(`Go ${myPokemon.name.toUpperCase()}!`)
  }, [myPokemon])

  return (
    <div className="centering">
      <div className="gameBorder">
        <div className="battery">
          <div className="batteryLight" />
          <p>BATTERY</p>
        </div>
        <div className="battleScreen">
          <div className="pokemonSprites">
            <div className="myHP">
              <span>
                {myHP > 0 ? myHP : 0} / {initMyHP}
              </span>
            </div>
            <span className="oppPkmnName">{oppPokemon.name.toUpperCase()}</span>
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
            <img
              id="oppPokemonImg"
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
              <p>{fightText}</p>
            </div>

            <div className="fightButtons">
              <button onClick={() => attackOpponent('normal', 70, oppPokemon)}>
                TACKLE
              </button>
              <button onClick={() => attackOpponent('special', 70, oppPokemon)}>
                {myType.toUpperCase()} ATTACK
              </button>
              <button onClick={() => lowerOppAtk(oppPokemon)}>GROWL</button>
              <button onClick={() => raiseDefense(myPokemon)}>
                DEFENSE CURL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Battle
