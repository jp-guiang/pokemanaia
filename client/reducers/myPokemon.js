import { SET_HP, SET_MY_DEF } from '../actions/myPokemon'

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
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_HP:
      return state.map((myPokemon) => {
        if (myPokemon.id == pokemon.id) {
          const tempPokemon = myPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return myPokemon
      })
    case SET_MY_DEF:
      return state.map((myPokemon) => {
        if (myPokemon.id == pokemon.id) {
          const tempPokemon = myPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return myPokemon
      })
    default:
      return state
  }
}

export default reducer
