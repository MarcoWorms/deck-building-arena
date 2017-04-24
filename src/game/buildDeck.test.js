const buildDeck = require('./buildDeck')

const testDeck = {
  'Bear': 4,
  'Soldier': 4,
  'Rat': 4,
  'Dog': 4,
  'Eagle': 4,
  'Lion': 4,
  'Tiger': 4,
  'Buffalo': 2,
}

test('Build deck', () => {
  expect(buildDeck(testDeck).toString())
    .toEqual([
      'Bear', 'Bear', 'Bear', 'Bear',
      'Soldier', 'Soldier', 'Soldier', 'Soldier',
      'Rat', 'Rat', 'Rat', 'Rat',
      'Dog', 'Dog', 'Dog', 'Dog',
      'Eagle', 'Eagle', 'Eagle', 'Eagle',
      'Lion', 'Lion', 'Lion', 'Lion',
      'Tiger', 'Tiger', 'Tiger', 'Tiger',
      'Buffalo', 'Buffalo',
    ].toString())
})
