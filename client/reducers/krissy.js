import { SET_KRS_HP, SET_KRS_ATK, SET_KRS_DEF } from '../actions/krissy.js'

const initialState = [
  {
    name: 'clefairy',
    id: 35,
    stats: {
      0: {
        base_stat: 70,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 60,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    },
    types: {
      0: {
        type: {
          name: 'normal',
        },
      },
    },
  },
  {
    name: 'jigglypuff',
    id: 39,
    stats: {
      0: {
        base_stat: 115,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 45,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 20,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    },
    types: {
      0: {
        type: {
          name: 'normal',
        },
      },
    },
  },
  {
    name: 'meowth',
    id: 52,
    stats: {
      0: {
        base_stat: 40,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 45,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    },
    types: {
      0: {
        type: {
          name: 'normal',
        },
      },
    },
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SET_KRS_HP:
      console.log('hp')
      return state.map((krissyPokemon) => {
        if (krissyPokemon.id == pokemon.id) {
          const tempPokemon = krissyPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return krissyPokemon
      })
    case SET_KRS_ATK:
      return state.map((krissyPokemon) => {
        if (krissyPokemon.id == pokemon.id) {
          const tempPokemon = krissyPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return krissyPokemon
      })
    case SET_KRS_DEF:
      return state.map((krissyPokemon) => {
        if (krissyPokemon.id == pokemon.id) {
          const tempPokemon = krissyPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return krissyPokemon
      })
    default:
      return state
  }
}

export default reducer
