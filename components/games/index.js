const express = require('express')
const asyncHandler = require('express-async-handler')
const games = require('./controller')

const router = express.Router()
router.post('/', asyncHandler(games.addGame))

module.exports = router
