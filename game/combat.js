import {
  map,
  merge,
  of,
  prop,
  propEq,
  pick,
  pipe,
} from 'ramda'

import models from './models'

const decks = pipe(
  prop('players'),
  map(prop('deck'))
)

const calculateLife = (state, field) => {
  
}

const initialState = players => ({
  turns: [],
  players,
})

const buildField = (decks, turnIndex) => {
  return decks.map(find(propEq('turn', turnIndex)))
}

const playTurn = (state, turnIndex) => {
  const field = buildField(decks(state), turnIndex)
  const result = {
    field,
    playersLife: calculateLife(state, field)
  }
  return merge(state, { turns: [ ...state.turns, result ] })
}

function combat (state, turnIndex = 0) {
  return new Promise((resolve) => {
    const deadPlayers = state.players.find(player => player.hp < 0)

    if (deadPlayers) {
      resolve(state)
    }

    return resolve(
      combat(playTurn(state, turnIndex), turnIndex + 1)
    )
  })
}

export default players => combat(initialState(players))
