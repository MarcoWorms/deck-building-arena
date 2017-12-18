import {
  map,
  merge,
} from 'ramda'

import player from './player'

const buildFactories = map(merge)

export default buildFactories({
  player,
})
