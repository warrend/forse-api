const firebaseApp = require('../../libraries/firebase')
const { ServerError } = require('../../errors')

const db = firebaseApp.firestore()

const addGame = async game => {
  try {
    let gamesRef = await db.collection('current_games_daniel').add(game)
    return gamesRef
  } catch (error) {
    throw new ServerError(error)
  }
}

module.exports = {
  addGame,
}