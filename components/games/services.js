let admin = require('firebase-admin')
const firebaseApp = require('../../libraries/firebase')
const { ServerError } = require('../../errors')

const db = firebaseApp.firestore()

const addGame = async game => {
  try {
    let gamesRef = await db.collection('games').add(game)
    return gamesRef
  } catch (error) {
    throw new ServerError(error)
  }
}

const createNewGame = async (challengerId, contenderId) => {
  try {
    // @TODO add other root level game info
    const newGame = {
      challenger: {
        challengerId,
        score: '',
      },
      contender: {
        contenderId,
        score: '',
      },
    }
  
    let gamesRef = await db.collection('games').add(newGame)
    // @TODO refactor this below
    await addGameIdToUser(challengerId, gamesRef.id)
    await addGameIdToUser(contenderId, gamesRef.id)
  } catch (error) {
    throw new ServerError(error)
  }
}

const addGameIdToUser = async (playerId, gameId) => {
  try {
    let playerRef = db.collection('players').doc(playerId)
    return await playerRef.update({
      ['games']: admin.firestore.FieldValue.arrayUnion(gameId)
    })
  } catch (error) {
    throw new ServerError(error)
  }
}

// const challenge = async (challenger, contender, gameType, firstShotCall, status) => {
//   try {
//     let userChallengesRef = await db.collection('users_daniel').doc(contender).collection('challenges').doc(challenger)
  
//       userChallengesRef.set({
//         challenger,
//         gameType,
//         firstShotCall,
//         status,
//       })
//     }
//   } catch (error) {
//     throw new ServerError(error)
//   }
// }

const challengeResponse = async (challengerId, contenderId, status) => {
  // with verifyToken, we will be able to get the user id from the token.uid instead of passing it in the body
  try {
    let challengeRef = await db.collection('users_daniel').doc(contenderId).collection('challenges').doc(challengerId)
    await challengeRef.update({ status })
  } catch (error) {
    throw new ServerError(error)
  }
}

module.exports = {
  addGame,
  challengeResponse,
  addGameIdToUser,
  createNewGame,
}