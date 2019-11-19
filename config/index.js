// load .env in local development
const dotenvConfig = require('dotenv').config({ silent: true }).parsed

const common = require('./common.js')
const games = require('../components/games')

var config = Object.assign({}, common, games, dotenvConfig)

module.exports = config