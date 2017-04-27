import {
  merge,
  without,
} from 'ramda'
import values from './values'

const manaCost = value => Math.ceil(value / values.manaCost)

const randomModifier = (existent) => {
  const modifiers = keys(without(existent, value.modifiers))
  const index = Math.floor(Math.random() * modifiers.length)
  return modifiers[index]
}

// chance is given in %, rng(50) = 50% chance
const rng = chance => (Math.random() * 100) < chance

const calculateValue = card =>

export default function generate (value, card) {
  if (calculateValue(card) > value) {
    return card
  }
  if (!card) {
    card = {
      cost: manaCost(value),
      modifiers: [],
    }
  }
  if (rng(20) && card.modifiers.length !== values.modifiers.length) { 
    return generate(value, merge(card, {
      modifiers: [
        ...card.modifiers,
        randomModifiers(card.modifiers)
      ]
    }))
  }
}
