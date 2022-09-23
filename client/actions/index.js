// import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_JV = 'SET_JV'
export const SET_POKEMON = 'SET_POKEMON'

export function setPokemon(pokemon) {
  return {
    type: SET_POKEMON,
    payload: pokemon,
  }
}

export function setJV(pokemon) {
  return {
    type: SET_JV,
    payload: pokemon,
  }
}

// export function setFruits(fruits) {
//   return {
//     type: SET_FRUITS,
//     payload: fruits,
//   }
// }

// export function fetchFruits() {
//   return (dispatch) => {
//     return getFruits().then((fruits) => {
//       dispatch(setFruits(fruits))
//       return null
//     })
//   }
// }
