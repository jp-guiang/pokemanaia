import { SET_JSH_HP, SET_JSH_ATK, SET_JSH_DEF } from '../actions/josh.js'

const initialState = [
  {
    name: 'squirtle',
    id: 7,
    stats: {
      0: {
        base_stat: 44,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 48,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 65,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    types: {
      0: {
        type: {
          name: 'water',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_JSH_HP:
      console.log('hp')
      return state.map((joshPokemon) => {
        if (joshPokemon.id == pokemon.id) {
          const tempPokemon = joshPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return joshPokemon
      })
    case SET_JSH_ATK:
      return state.map((joshPokemon) => {
        if (joshPokemon.id == pokemon.id) {
          const tempPokemon = joshPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return joshPokemon
      })
    case SET_JSH_DEF:
      return state.map((joshPokemon) => {
        if (joshPokemon.id == pokemon.id) {
          const tempPokemon = joshPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return joshPokemon
      })
    default:
      return state
  }
}

export default reducer
