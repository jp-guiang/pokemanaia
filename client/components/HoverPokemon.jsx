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
          style={isHovering ? { opacity: '50%' } : null}
          src={pokemon.sprites.front_default}
          alt={'pokemon'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></img>

        {isHovering && (
          <div>
            <p>
              <strong>HP:</strong> {pokemon.stats[0].base_stat}
            </p>
            <p>
              <strong>Attack:</strong> {pokemon.stats[1].base_stat}
            </p>
            <p>
              <strong>Defense:</strong> {pokemon.stats[2].base_stat}
            </p>
            <p>
              <strong>Special-attack:</strong> {pokemon.stats[3].base_stat}
            </p>
            <p>
              <strong>Special-defense:</strong> {pokemon.stats[4].base_stat}
            </p>
            <p>
              <strong>Speed:</strong> {pokemon.stats[5].base_stat}
            </p>
          </div>
        )}
        <p key={pokemon.name}>{pokemon.name}</p>
      </div>
    </>
  )
}
