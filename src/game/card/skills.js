const {
  __,
  add,
  divide,
  identity,
  multiply,
  pipe,
} = require('ramda')

const percentage = amount => pipe(
  divide(__, 100),
  multiply(amount),
  Math.ceil
)

const half = percentage(50)

const standardDuration = pipe(
  percentage(10),
  add(1)
)

const halfStandardDuration = pipe(
  standardDuration,
  half
)

const defense = [
  {
    minPoints: 1,
    skill: {
      type: 'shield every turn',
      amount: half,
      duration: standardDuration,
    },
  },
  {
    minPoints: 10,
    skill: {
      type: 'shield once',
      amount: multiply(3),
    },
  },
]

const attack = [
  {
    minPoints: 1,
    skill: {
      type: 'damage every turn',
      amount: half,
      duration: standardDuration,
    },
  },
  {
    minPoints: 10,
    skill: {
      type: 'damage once',
      amount: multiply(3),
    },
  },
]

const heal = [
  {
    minPoints: 1,
    skill: {
      type: 'heal every turn',
      amount: half,
      duration: standardDuration,
    },
  },
  {
    minPoints: 10,
    skill: {
      type: 'heal once',
      amount: multiply(3),
    },
  },
]

const buff = [
  {
    minPoints: 1,
    skill: {
      type: 'more damage',
      amount: percentage(25),
      duration: halfStandardDuration,
    },
  },
  {
    minPoints: 10,
    skill: {
      type: 'more defense',
      amount: percentage(35),
      duration: halfStandardDuration,
    },
  },
]

module.exports = {
  defense,
  attack,
  heal,
  buff, 
}
