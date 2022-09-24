import { SET_JV_HP, SET_JV_ATK, SET_JV_DEF } from '../actions/JV.js'

const initialState = [
  {
    name: 'vulpix',
    id: 37,
    stats: {
      0: {
        base_stat: 38,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 41,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    },
    types: {
      0: {
        type: {
          name: 'fire',
        },
      },
    },
  },
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
    case SET_JV_HP:
      console.log('hp')
      return state.map((jvPokemon) => {
        if (jvPokemon.id == pokemon.id) {
          const tempPokemon = jvPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return jvPokemon
      })
    case SET_JV_ATK:
      return state.map((jvPokemon) => {
        if (jvPokemon.id == pokemon.id) {
          const tempPokemon = jvPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return jvPokemon
      })
    case SET_JV_DEF:
      return state.map((jvPokemon) => {
        if (jvPokemon.id == pokemon.id) {
          const tempPokemon = jvPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return jvPokemon
      })
    default:
      return state
  }
}

export default reducer
