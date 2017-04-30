const generateCard = require('./card')
const { repeat, call, prop, pipe, map, toString, reduce, add } = require('ramda')

const deckValue = pipe(
  map(prop('value')),
  reduce(add, 0)
)

const buildTestDeck = (size, maxCardValue) =>
  repeat(
    () => generateCard(Math.floor(Math.random() * maxCardValue)),
    size
  ).map(call)

console.log(
  buildTestDeck(30, 200)
)
