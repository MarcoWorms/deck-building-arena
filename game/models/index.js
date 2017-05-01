import { tap } from 'ramda'
global.log = tap(console.log)

import cards from './cards'
import traits from './traits'
import combat from './combat'

export default {
  cards,
  traits,
  combat,
}
