import {
  merge,
  without,
} from 'ramda'
import values from './values'

const manaCost = value => Math.ceil(value / values.manaCost)

const randomFromArray = array =>
  array[Math.floor(array.length * Math.random())]

const randomModifier = pipe(
  without(__, values.modifiers),
  keys,
  randomFromArray,
)

const addModifier = card => merge(card, {
  modifiers: [
    ...card.modifiers,
    randomModifiers(card.modifiers)
  ]
})

const canAddModifier = pipe(
  prop('modifiers'),
  length,
  equals(values.modifiers.length),
  not
)


const addStat = (type, card) => merge(card, {
  [type]: card[type] + 1
})

const buildCard = applySpec({
  manaCost,
  modifiers: always([]),
})

const calculateStats = pipe(
  prop('stats'),
  toPairs,
  reduce((acc, [key, value]) => acc + value * values.stats[key], 0)
)

const calculateModifiers = pipe(
  prop('modifiers'),
  reduce((acc, name) => acc + values.modifiers[name], 0)
)

const calculateValue = pipe(
  ap([calculateStats, calculateModifiers]),
  reduce(add, 0)
)

const rngPass = percentageChance =>
  (Math.random() * 100) < percentageChance

export default function generate (value, card) {
  if (calculateValue(card) > value) {
    return card
  }
  if (!card) {
    return generate(value, buildCard(value))
  }
  if (rngPass(20) && canAddModifier(card)) { 
    return generate(value, addModifier(card))
  }
  if (rngPass(50)) { 
    return generate(value, addStat('attack', card))
  }
  else {
    return generate(value, addStat('defense', card))
  }
}
