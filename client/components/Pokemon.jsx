import React, { useState } from 'react'

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
          style={
            isHovering ? { opacity: '50%', width: '13%', height: 'auto' } : null
          }
          src={pokemon.sprites.front_default}
          alt={'pokemon'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></img>

        {isHovering && (
          <div>
            {pokemon.stats.map((info) => {
              return (
                <p key={info.stat.name}>
                  <strong>
                    {info.stat.name.charAt(0).toUpperCase() +
                      info.stat.name.slice(1)}
                    :
                  </strong>{' '}
                  {info.base_stat}
                </p>
              )
            })}
          </div>
        )}
        <p key={pokemon.name}>{pokemon.name}</p>
      </div>
    </>
  )
}
