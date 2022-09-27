import { SET_JOE_HP, SET_JOE_ATK, SET_JOE_DEF } from '../actions/joseph.js'

const initialState = [
  {
    name: 'cubone',
    id: 104,
    stats: {
      0: {
        base_stat: 50,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 50,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 95,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/104.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
    },
    types: {
      0: {
        type: {
          name: 'ground',
        },
      },
    },
  },
  {
    name: 'exeggutor',
    id: 103,
    stats: {
      0: {
        base_stat: 125,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 95,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 85,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/103.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
    },
    types: {
      0: {
        type: {
          name: 'grass',
        },
      },
      1: {
        type: {
          name: 'psychic',
        },
      },
    },
  },
  {
    name: 'muk',
    id: 89,
    stats: {
      0: {
        base_stat: 105,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 105,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 100,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    },
    types: {
      0: {
        type: {
          name: 'poison',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_JOE_HP:
      console.log('hp')
      return state.map((josephPokemon) => {
        if (josephPokemon.id == pokemon.id) {
          const tempPokemon = josephPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return josephPokemon
      })
    case SET_JOE_ATK:
      return state.map((josephPokemon) => {
        if (josephPokemon.id == pokemon.id) {
          const tempPokemon = josephPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return josephPokemon
      })
    case SET_JOE_DEF:
      return state.map((josephPokemon) => {
        if (josephPokemon.id == pokemon.id) {
          const tempPokemon = josephPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return josephPokemon
      })
    default:
      return state
  }
}

export default reducer
