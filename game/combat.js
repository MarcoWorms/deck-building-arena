import {
  always,
  applySpec,
  merge,
  map,
  pick,
  pipe,
} from 'ramda'

import models from './models'

const initialState = applySpec({
  players: pipe(
    map(pick(['id', 'deck'])),
    map(merge({ hp: models.combat.playerHp }))
  ),
  turns: always([]),
})

export default function combat (players, state = initialState(players)) {
  return new Promise((resolve) => {
    const deadPlayers = players.find(player => player.hp < 0)
    if (deadPlayers) {
      resolve({
        players,
        state,
      })
    }
  })
}
