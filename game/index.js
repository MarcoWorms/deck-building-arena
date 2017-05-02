import buildRandomDeck from './buildRandomDeck'
import combat from './combat'

const player1 = {
  id: '111',
  deck: buildRandomDeck(), 
}``
const player2 = {
  id: '222',
  deck: buildRandomDeck(), 
}

console.log(combat([player1, plqyer2]))

