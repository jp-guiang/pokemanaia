import React, { useState, useEffect } from 'react'
import { getPokemon, getPokeInfo } from '../apis/apiClient'
import { useDispatch } from 'react-redux'
import { returnTeam } from '../actions/myPokemon'
import Team from './Team'
import HoverPokemon from './HoverPokemon'

export default function Pokemon(props) {
  const [pageList, setPokemonList] = useState([])
  const [currentPage, setPage] = useState(0)
  const [pageLimit, setLimit] = useState(20)
  const [pokeDex, setPokeDex] = useState([])
  const [team, setTeam] = useState([])
  const dispatch = useDispatch()
  const mapToggle = props.fn

  useEffect(() => {
    getPokemon(currentPage, pageLimit)
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
  }, [currentPage])

  function nextPage() {
    if (currentPage != 7) setPage(currentPage + 1)
  }

  function prevPage() {
    if (currentPage != 0) setPage(currentPage - 1)
  }

  function home() {
    setPage(0)
  }

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

  return (
    <>
      <h1>Team Rocket</h1>

      <button onClick={restartTeam}>Reset Team</button>
      <button onClick={confirmTeam}>Confirm Team</button>
      <Team team={team} />

      <button onClick={home}>Home</button>
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>

      {pokeDex.map((pokemon) => (
        <a key={pokemon.name} onClick={() => setPokemon(pokemon)}>
          <HoverPokemon hoverData={pokemon} />
        </a>
      ))}
      <button onClick={home}>Home</button>
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </>
  )
}
