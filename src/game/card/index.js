const {
  tap,
  ifElse,
  gte,
  has,
  of,
  merge,
  pipe,
  keys,
  without,
  __,
  length,
  not,
  equals,
  prop,
  applySpec,
  always,
  toPairs,
  reduce,
  ap,
  add,
} = require('ramda')

const values = require('./values')
const types = require('./types')

const randomFromArray = array =>
  array[Math.floor(array.length * Math.random())]

const randomModifier = pipe(
  without(__, keys(values.modifiers)),
  randomFromArray
)

const addModifier = card => merge(card, {
  modifiers: [
    ...card.modifiers,
    randomModifier(card.modifiers),
  ],
})

const canAddModifier = pipe(
  prop('modifiers'),
  length,
  gte(__, length(keys(values.modifiers))),
  not
)

const addStat = (type, card) => merge(card, {
  stats: merge(card.stats, {
    [type]: card.stats[type] + 1,
  }),
})

const randomType = () => randomFromArray(types.map(prop('name')))

const manaCost = value => Math.ceil(value / values.manaCost)

const buildCard = applySpec({
  manaCost,
  type: randomType,
  modifiers: always([]),
  stats: always({
    attack: 0,
    defense: 0,
  }),
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
  of,
  ap([
    calculateStats,
    calculateModifiers,
  ]),
  reduce(add, 0)
)

const rngPass = percentageChance =>
  (Math.random() * 100) < percentageChance

module.exports = function generate (seedValue, card = buildCard(seedValue)) {
  if (seedValue < calculateValue(card)) {
    return merge(card, {
      value: calculateValue(card),
      seedValue,
    })
  }
  if (rngPass(5) && canAddModifier(card)) { 
    return generate(seedValue, addModifier(card))
  }
  if (rngPass(50)) { 
    return generate(seedValue, addStat('attack', card))
  }
  return generate(seedValue, addStat('defense', card))
}

