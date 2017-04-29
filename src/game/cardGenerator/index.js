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

const manaCost = value => Math.ceil(value / values.manaCost)

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

const buildCard = applySpec({
  manaCost,
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

module.exports = function generate (value, card) {
  if (!card) {
    return generate(value, buildCard(value))
  }
  if (value + calculateValue(card) < 0) {
    return card
  }
  if (rngPass(10) && card.modifiers && canAddModifier(card)) { 
    return generate(value, addModifier(card))
  }
  if (rngPass(50)) { 
    return generate(value, addStat('attack', card))
  }
  return generate(value, addStat('defense', card))
}
