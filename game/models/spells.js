export default [
  {
    id: 'powershout',
    type: 'spell',
    turn: 1,
    onCast: attacks => [
      ...attacks,
      {
        target: 'monsters',
        damage: 1,
      },
    ],
  },
]
