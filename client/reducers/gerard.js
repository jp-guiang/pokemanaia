import { SET_GRD_HP, SET_GRD_ATK, SET_GRD_DEF } from '../actions/gerard.js'

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
        base_stat: 50,
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
  {
    name: 'dugtrio',
    id: 51,
    stats: {
      0: {
        base_stat: 35,
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
        base_stat: 50,
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
          name: 'ground',
        },
      },
    },
  },
  {
    name: 'gyarados',
    id: 130,
    stats: {
      0: {
        base_stat: 95,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 125,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    },
    types: {
      0: {
        type: {
          name: 'water',
        },
      },
      1: {
        type: {
          name: 'flying',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_GRD_HP:
      console.log('hp')
      return state.map((gerardPokemon) => {
        if (gerardPokemon.id == pokemon.id) {
          const tempPokemon = gerardPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return gerardPokemon
      })
    case SET_GRD_ATK:
      return state.map((gerardPokemon) => {
        if (gerardPokemon.id == pokemon.id) {
          const tempPokemon = gerardPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return gerardPokemon
      })
    case SET_GRD_DEF:
      return state.map((gerardPokemon) => {
        if (gerardPokemon.id == pokemon.id) {
          const tempPokemon = gerardPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return gerardPokemon
      })
    default:
      return state
  }
}

export default reducer
