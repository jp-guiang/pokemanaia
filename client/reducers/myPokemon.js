import { SET_POKEMON } from '../actions/myPokemon'

const initialState = [
  {
    name: 'pikachu',
    id: 25,
    stats: {
      0: {
        base_stat: 35,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 55,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 40,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    types: {
      0: {
        type: {
          name: 'electric',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_POKEMON:
      return payload
    default:
      return state
  }
}

export default reducer
