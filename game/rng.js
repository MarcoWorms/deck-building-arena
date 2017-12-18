import crypto from 'crypto'
import Promise from 'bluebird'
import {
  invoker,
  flip,
  divide,
  add,
} from 'ramda'

const randomBytes = Promise.promisify(crypto.randomBytes)

const randomIndex = array =>
  Math.floor(Math.random() * array.length)

export const randomFromArray = array =>
  Promise.resolve(array[randomIndex(array)])

export const rollDice = faces =>
  randomBytes(2)
    .then(invoker(0, 'readUInt16LE'))
    .then(flip(divide)(0x10000 / faces))
    .then(Math.floor)
    .then(add(1))
