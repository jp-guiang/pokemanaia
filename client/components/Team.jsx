import React from 'react'

export default function Team(props) {
  const { team } = props
  return (
    <>
      {team.map((pokemon) => (
        <div key={pokemon.name}>
          <img src={pokemon.sprites.front_default} alt={'pokemon'}></img>
        </div>
      ))}
    </>
  )
}
