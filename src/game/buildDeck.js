const { pipe, repeat, reduce, toPairs } = require('ramda')

module.exports = pipe(
  toPairs,
  reduce(
    (deck, [name, amount]) => [
      ...deck,
      ...repeat(name, amount)
    ],
    []
  )
)
