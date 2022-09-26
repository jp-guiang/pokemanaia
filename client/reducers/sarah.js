import { SET_SRH_HP, SET_SRH_ATK, SET_SRH_DEF } from '../actions/sarah.js'

const initialState = [
  {
    name: 'oddish',
    id: 43,
    stats: {
      0: {
        base_stat: 45,
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
        base_stat: 55,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    },
    types: {
      0: {
        type: {
          name: 'grass',
        },
      },
      1: {
        type: {
          name: 'poison',
        },
      },
    },
  },
  {
    name: 'bellsprout',
    id: 69,
    stats: {
      0: {
        base_stat: 50,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 75,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 35,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    },
    types: {
      0: {
        type: {
          name: 'grass',
        },
      },
      1: {
        type: {
          name: 'poison',
        },
      },
    },
  },
  {
    name: 'tangela',
    id: 114,
    stats: {
      0: {
        base_stat: 65,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 100,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 115,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    },
    types: {
      0: {
        type: {
          name: 'grass',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_SRH_HP:
      console.log('hp')
      return state.map((sarahPokemon) => {
        if (sarahPokemon.id == pokemon.id) {
          const tempPokemon = sarahPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return sarahPokemon
      })
    case SET_SRH_ATK:
      return state.map((sarahPokemon) => {
        if (sarahPokemon.id == pokemon.id) {
          const tempPokemon = sarahPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return sarahPokemon
      })
    case SET_SRH_DEF:
      return state.map((sarahPokemon) => {
        if (sarahPokemon.id == pokemon.id) {
          const tempPokemon = sarahPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return sarahPokemon
      })
    default:
      return state
  }
}

export default reducer
