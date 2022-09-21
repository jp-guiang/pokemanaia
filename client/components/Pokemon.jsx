import React, { useState, useEffect } from 'react'
import { getPokemon, getPokeInfo } from '../apis/apiClient'

export default function Pokemon() {
  const [pageList, setPokemonList] = useState([])
  const [currentPage, setPage] = useState(0)
  const [pageLimit, setLimit] = useState(20)
  const [pokeDex, setPokeDex] = useState([])

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
          // console.log(test)
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
  console.log(pokeDex)
  return (
    <>
      <h1>Pokemon</h1>
      <button onClick={home}>Home</button>
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
      {pokeDex.map((pokemon) => (
        <div key={pokemon.name}>
          <img src={pokemon.sprites.front_default} alt={'pokemon'}></img>
          <p key={pokemon.name}>{pokemon.name}</p>
        </div>
      ))}
    </>
  )
}
