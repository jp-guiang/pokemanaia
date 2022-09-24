import React, { useState, useEffect } from 'react'
import { getPokemon, getPokeInfo } from '../apis/apiClient'
import { useDispatch } from 'react-redux'
import { returnTeam } from '../actions/myPokemon'
import Team from './Team'
import Pokemon from './Pokemon'

import TextField from '@mui/material/TextField'

export default function Home(props) {
  const [pageList, setPokemonList] = useState([])

  const [pageLimit] = useState(151)
  const [pokeDex, setPokeDex] = useState([])
  const [team, setTeam] = useState([])
  const dispatch = useDispatch()
  const mapToggle = props.fn
  const [inputText, setInputText] = useState('')

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  useEffect(() => {
    getPokemon(pageLimit)
      .then((list) => {
        setPokemonList(list.results)
        return list.results
      })
      .then((pokemonNames) => {
        const pokeInfo = pokemonNames.map((poke) => {
          return getPokeInfo(poke.name)
        })

        return Promise.all(pokeInfo)
      })
      .then((pokeData) => {
        const pokeDexTest = pokeData.map((poke, index) => {
          const test = { ...pageList[index], ...poke }
          return test
        })
        setPokeDex(pokeDexTest)
      })

      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function setPokemon(pokemon) {
    let tempTeam = [...team]
    if (team.length < 6) {
      tempTeam.push(pokemon)
      setTeam(tempTeam)
    }
  }

  function restartTeam() {
    setTeam([])
  }

  function confirmTeam() {
    if (team.length != 0) {
      dispatch(returnTeam(team))
      mapToggle()
      console.log(team)
    }
  }

  const filteredData = pokeDex.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
      return el.name
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputText)
    }
  })

  return (
    <>
      <h1>Team Rocket</h1>

      <button onClick={restartTeam}>Reset Team</button>
      <button onClick={confirmTeam}>Confirm Team</button>
      <Team team={team} />

      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div>
        {filteredData.map((pokemon, element) => (
          // <li key={item.name + element}>{item.name}</li>
          <a key={pokemon.name + element} onClick={() => setPokemon(pokemon)}>
            <Pokemon hoverData={pokemon} />
          </a>
        ))}
      </div>
    </>
  )
}
