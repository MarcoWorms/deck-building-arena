const { repeat } = require('ramda')
const generate = require('.')

console.log(repeat(
  () => Math.random() * 1000,
  10
).map(x => generate(x())))

