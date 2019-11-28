const express = require('express')
const asyncHandler = require('express-async-handler')
const games = require('./controller')

const router = express.Router()
router.post('/', asyncHandler(games.addGame))
router.post('/challenge', asyncHandler(games.challenge))
router.post('/challenge-response', asyncHandler(games.challengeResponse))
router.post('/player/game/add', asyncHandler(games.addGameIdToUser))
router.post('/create', asyncHandler(games.createNewGame))

module.exports = router
