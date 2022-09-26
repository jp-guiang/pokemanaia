import { SET_JV_HP, SET_JV_ATK, SET_JV_DEF } from '../actions/JV.js'

const initialState = [
  {
    name: 'porygon',
    id: 137,
    stats: {
      0: {
        base_stat: 85,
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
        base_stat: 70,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
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
    name: 'haunter',
    id: 93,
    stats: {
      0: {
        base_stat: 115,
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
        base_stat: 45,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
    },
    types: {
      0: {
        type: {
          name: 'ghost',
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
    name: 'hypno',
    id: 97,
    stats: {
      0: {
        base_stat: 85,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 73,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/97.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
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
    name: 'aerodactyl',
    id: 142,
    stats: {
      0: {
        base_stat: 80,
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
        base_stat: 65,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
    },
    types: {
      0: {
        type: {
          name: 'rock',
        },
      },
      1: {
        type: {
          name: 'flying',
        },
      },
    },
  },
  {
    name: 'mewtwo',
    id: 150,
    stats: {
      0: {
        base_stat: 106,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 154,
        stat: {
          name: 'attack',
        },
      },
      2: {
        base_stat: 90,
        stat: {
          name: 'defense',
        },
      },
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
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
    name: 'magikarp',
    id: 129,
    stats: {
      0: {
        base_stat: 20,
        stat: {
          name: 'hp',
        },
      },
      1: {
        base_stat: 10,
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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
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
