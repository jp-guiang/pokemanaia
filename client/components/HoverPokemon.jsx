import React, { useState, useEffect } from 'react'

export default function Pokemon({ hoverData: pokemon }) {
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <>
      <div key={pokemon.name}>
        <img
          src={pokemon.sprites.front_default}
          alt={'pokemon'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></img>

        {isHovering && (
          <div>
            <h2>HP:{pokemon.stats[0].base_stat}</h2>
            <h2>Attack:{pokemon.stats[1].base_stat}</h2>
            <h2>Defense:{pokemon.stats[2].base_stat}</h2>
            <h2>Special-attack:{pokemon.stats[3].base_stat}</h2>
            <h2>Special-defense:{pokemon.stats[4].base_stat}</h2>
            <h2>Speed:{pokemon.stats[5].base_stat}</h2>
          </div>
        )}
        <p key={pokemon.name}>{pokemon.name}</p>
      </div>
    </>
  )
}
