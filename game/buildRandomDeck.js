import {
  always,
  map,
  pipe,
  prop,
  propEq,
  uniqBy,
} from 'ramda'

import models from './models'
import { randomFromArray } from './rng'

const randomCard = turn => randomFromArray(
  models.cards.filter(propEq('turn', turn))
)
// not working :(
// pipe(
//   propEq('turn'),
//   filter(__, models.cards),
//   randomFromArray
// )

export default pipe(
  always(models.cards),
  uniqBy(prop('turn')),
  map(prop('turn')),
  map(randomCard)
)

