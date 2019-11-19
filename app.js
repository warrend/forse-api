const express = require('express')
const app = express()

const gamesRoutes = require('./components/games')

app.use(express.json())

app.get('/', (req, res) => res.send('app.get /'))

app.use('/api/v1/games', gamesRoutes)

app.use(function(err, req, res, next){
  if(err){
    console.log("ERROR HANDLER", err)
    err instanceof BaseError ? res.status(err.statusCode).json(err) : res.status(500).json({});
  }
  next()
})

module.exports = app
