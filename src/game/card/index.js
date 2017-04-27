const {
  always,
  call,
  keys,
  map,
  merge,
  pick,
  pipe,
  prop,
  reduce,
  repeat,
  tap,
  toPairs,
  zipObj,
} = require('ramda')

const log = tap(console.log)

const stats = require('./stats')
const skills = require('./skills')

const names = map(prop('name'))

const randomFromArray = array =>
  array[Math.floor(Math.random() * array.length)]

const generateSkills = pipe(
  pick(names(stats)),
  toPairs,
  map(
    ([statName, points]) =>
      skills[statName.toLowerCase()]
        .map(skill => merge(skill, { points }))
        .filter(skill => skill.minPoints <= points)
  ),
  map(randomFromArray)
)

const initialCard = zipObj(
  names(stats),
  repeat(0, stats.length)
)

const randomStat = () => randomFromArray(stats).name

const generate = pipe(
  repeat(() => randomStat()),
  map(call),
  reduce(
    (card, stat) => merge(card, {
      [stat]: card[stat] + 1,
      level: !card.level ? 1 : card.level + 1,
    }),
    initialCard
  ),
  card => merge(card, {
    skills: generateSkills(card)
  })
)

module.exports = {
  generate,
}
