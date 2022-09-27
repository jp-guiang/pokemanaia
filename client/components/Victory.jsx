import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Victory() {
  const myTeam = useSelector((state) => state.myPokemon)
  return (
    <div>
      <div className="fame">
        {myTeam.map((pokemon, i) => {
          return (
            <div key={i}>
              <img
                className="fameImg"
                src={pokemon.sprites.front_default}
                alt="my pokemon"
              />
            </div>
          )
        })}
        <div className="fameBox">
          <p className="hallText">Welcome to the Pokemon Hall of Fame!</p>
        </div>
      </div>
      <img
        className="victoryCarpark"
        src="/images/pixelvictory.png"
        alt="a sunny carpark"
      />
    </div>
  )
}

export default Victory
