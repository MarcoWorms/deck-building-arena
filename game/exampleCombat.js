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
          'apian-jet-coot',
        ],
        [
          'murderous-pixyish-neontetra',
        ],
      ],
      attacks: [
        [],
        [
          {
            from: 'murderous-pixyish-neontetra',
            target: 'player',
            damage: 1,
          },
        ],
      ],
    },
    {
      index: 2,
      fields: [
        [
          'apian-jet-coot',
          'changeful-durational-rhesusmonkey',
        ],
        [
          'murderous-pixyish-neontetra',
          'uncolourable-cubic-muntjac',
        ],
      ],
      attacks: [
        [
          {
            from: 'apian-jet-coot',
            target: 'player',
            damage: 2,
          },
        ],
        [
          {
            from: 'murderous-pixyish-neontetra',
            target: 'player',
            damage: 1,
          },
        ],
      ],
    },
  ],
}
