const generate = require('.')

test('cardGenerator', () => {
  const card = generate(100)
  expect(card.stats).toBeTruthy()
  expect(card.modifiers).toBeTruthy()
  expect(card.value).toBeTruthy()
  expect(card.seedValue).toBeTruthy()
})
