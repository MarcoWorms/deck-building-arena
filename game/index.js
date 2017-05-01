import {
  __,
  filter,
  pipe,
  prop,
  propEq,
  uniq,
  uniqBy,
} from 'ramda'

import models from './models'
import { randomFromArray } from './rng'

const randomCard = turn => randomFromArray(
  models.cards.filter(propEq('turn', turn))
)
  
//   pipe(
//   propEq('turn'),
//   filter(__, models.cards),
//   randomFromArray
// )

const turns = uniqBy(prop('turn'), models.cards)
  .map(prop('turn'))

const buildDeck = () => turns.map(randomCard)

console.log(buildDeck())
console.log(buildDeck())
