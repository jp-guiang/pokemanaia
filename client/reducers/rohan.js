import { SET_RHN_HP, SET_RHN_ATK, SET_RHN_DEF } from '../actions/rohan.js'

const initialState = [
  {
    name: 'dratini',
    id: 147,
    stats: {
      0: {
        base_stat: 41,
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
        base_stat: 50,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    },
    types: {
      0: {
        type: {
          name: 'dragon',
        },
      },
    },
  },
  {
    name: 'abra',
    id: 63,
    stats: {
      0: {
        base_stat: 25,
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
        base_stat: 55,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    },
    types: {
      0: {
        type: {
          name: 'psychic',
        },
      },
    },
  },
  {
    name: 'lapras',
    id: 131,
    stats: {
      0: {
        base_stat: 130,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 85,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    },
    types: {
      0: {
        type: {
          name: 'water',
        },
      },
      1: {
        type: {
          name: 'ice',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_RHN_HP:
      console.log('hp')
      return state.map((rohanPokemon) => {
        if (rohanPokemon.id == pokemon.id) {
          const tempPokemon = rohanPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return rohanPokemon
      })
    case SET_RHN_ATK:
      return state.map((rohanPokemon) => {
        if (rohanPokemon.id == pokemon.id) {
          const tempPokemon = rohanPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return rohanPokemon
      })
    case SET_RHN_DEF:
      return state.map((rohanPokemon) => {
        if (rohanPokemon.id == pokemon.id) {
          const tempPokemon = rohanPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return rohanPokemon
      })
    default:
      return state
  }
}

export default reducer
