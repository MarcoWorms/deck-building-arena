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

const initialState = players => ({
  players,
  turns: [
    {
      index: 0,
      fields: [[], []],
    }
  ],
})

const combat = (state, turnIndex = 0) =>
  new Promise((resolve) => {
    return resolve(
      combat(
        playTurn(state, turnIndex),
        turnIndex + 1
      )
    )
  })

export default players => combat(initialState(players))
