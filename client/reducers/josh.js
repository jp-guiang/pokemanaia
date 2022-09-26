import { SET_JSH_HP, SET_JSH_ATK, SET_JSH_DEF } from '../actions/josh.js'

const initialState = [
  {
    name: 'magmar',
    id: 126,
    stats: {
      0: {
        base_stat: 65,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/126.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
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
    name: 'growlithe',
    id: 58,
    stats: {
      0: {
        base_stat: 55,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 70,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
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
    name: 'ponyta',
    id: 77,
    stats: {
      0: {
        base_stat: 90,
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
        base_stat: 65,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
    },
    types: {
      0: {
        type: {
          name: 'fire',
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
