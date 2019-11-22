const dal = require('./dal')

const addGame = async (req, res, next) => {
  // await validator(schema.gamesSchema, req.body)
  if (req.body) dal.addGame(req.body)

  res.status(202).end()
  next()
}

module.exports = {
  addGame
}