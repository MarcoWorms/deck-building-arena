import models from './models'
import { rollDice } from './rng'

Promise.all(
  Array.from({ length: 25 }).map(_ => rollDice(3))
)
.then(console.log)


