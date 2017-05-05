export default {
  players: [
    {
      id: 'player1',
      deck: [
        'apian-jet-coot',
        'changeful-durational-rhesusmonkey',
      ],
    },
    {
      id: 'player2',
      deck: [
        'murderous-pixyish-neontetra',
        'uncolourable-cubic-muntjac',
      ],
    },
  ],
  turns: [
    {
      index: 0,
      fields: [[], []],
    },
    {
      index: 1,
      fields: [
        [
          {
            id: 'apian-jet-coot',
            attacks: [],
          },
        ],
        [
          {
            id: 'murderous-pixyish-neontetra',
            attacks: [
              {
                target: 'player',
                damage: 1,
              },
            ],
          },
        ],
      ],
    },
    {
      index: 2,
      fields: [
        [
          {
            id: 'apian-jet-coot',
            attacks: [
              {
                target: 'player',
                damage: 2,
              },
            ],
          },
          {
            id: 'changeful-durational-rhesusmonkey',
            attacks: [],
          },
        ],
        [
          {
            id: 'murderous-pixyish-neontetra',
            attacks: [
              {
                target: 'player',
                damage: 1,
              },
            ],
          },
          {
            id: 'uncolourable-cubic-muntjac',
            attacks: [],
          },
        ],
      ],
    },
  ],
}
