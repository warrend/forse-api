const services = require('./services')

const addGame = async (req, res, next) => {
  // await validator(schema.gamesSchema, req.body)
  if (req.body) services.addGame(req.body)

  res.status(202).end()
  next()
}

const createNewGame = async (req, res, next) => {
  if (req.body) {
    const { challengerId, contenderId } = req.body
    await services.createNewGame(challengerId, contenderId)
  }

  res.status(202).end()
  next()
}

const addGameIdToUser = async (req, res, next) => {
  if (req.body) {
    const { playerId, gameId } = req.body
    await services.addGameIdToUser(playerId, gameId)
  }
  
  res.status(200).json()
  next()
}

const challenge = async (req, res, next) => {
  // sends a challenge and a shot to another user - opponents id
  // if challenger's ID exists already, reject it since there is already a challenge sent
  if (req.body) {
    const {
      challenger,
      contender,
      gameType,
      firstShotCall,
    } = req.body

    // const shot = {
    //   shotTimeConstraint: 24,
    //   shotTimeConstraintUnits: 'hrs',
    //   legs: {
    //     0: {   
    //       shotType: 'run',
    //       quantity: 10,
    //       quantityUnit: 'mi',
    //       activityTimeLimit: 60,
    //       activityTimeLimitUnit: 'min',
    //       description: 'Run 10 miles within 60 minutes'
    //     }
    //   }
    // }
    const status = 'PENDING'

    await services.challenge(challenger, contender, gameType, firstShotCall, status)
  }
  res.status(200).json()
  next()
}

const challengeResponse = async (req, res, next) => {
  // accept or reject a challenge
  // @TODO challenges should expire at some point
  if (req.body) {
    const { challengerId, contenderId, status } = req.body
    // grab the challenge doc
    // change it to either accept or reject
    // if reject, update challengers document
    // if accept, update challengers document and create a new game
    // setting the turn to the challenger
    await services.challengeResponse(challengerId, contenderId, status)
  }
  res.status(200).json()
}

module.exports = {
  addGame,
  challenge,
  challengeResponse,
  addGameIdToUser,
  createNewGame,
}