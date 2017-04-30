const {
  call,
  repeat,
} = require('ramda')
const { generate } = require('./card')

console.log(
  JSON.stringify([
    ...repeat(
      () => generate(20),
      15
    ),
    ...repeat(
      () => generate(50),
      10
    ),
    ...repeat(
      () => generate(100),
      4
    ),
    ...repeat(
      () => generate(200),
      1
    ),
  ].map(call), null, 2)
)
