let match = {
  id: 500,
  winner: null,
  players: [123, 456],
  score: {
    123: ['B'],
    456: ['B', 'I', 'K'],
  },
  start: 342352553224,
  end: null,
  duration: 6,
  playerTurn: 123,
  turns: [
    {
      id: 100,
      turnOrder: 1,
      create: {
        player: 123,
        created: 235435345,
        closed: 78345973495,
        shotTimeLimit: 24,
        shotTimeLimitUnits: 'hr',
        success: true,
        legs: [
          {
            id: 200,
            created: 392038,
            closed: 90809897,
            success: true,
            shot: {
              type: 'run',
              distance: 5,
              distanceUnits: 'mi',
              timeLimit: 60,
              timeUnits: 'min',
              description: 'lorem ipsum blah blah',
            }
          },
          {
            id: 201,
            created: 392038,
            closed: 908897,
            success: true,
            shot: {
              type: 'bike',
              distance: 25,
              distanceUnits: 'mi',
              timeLimit: 3,
              timeUnits: 'hr',
              description: 'lorem ipsum blah blah',
            }
          }
        ]
      },
      match: {
        id: 101,
        player: 456,
        created: 235435345,
        closed: 78345973495,
        success: null,
        legs: [
          {
            id: 200,
            created: 235435345,
            closed: 78345973495,
            success: true, 
            shot: {
              type: 'run',
              distance: 7,
              distanceUnits: 'mi',
              time: 52,
              timeUnits: 'min',
            }
          }
        ]
      }
    }
  ]
}