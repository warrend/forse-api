const express = require('express')
const asyncHandler = require('express-async-handler')
const games = require('./controller')

const router = express.Router()
router.post('/hello', asyncHandler(games.hello))

module.exports = router
