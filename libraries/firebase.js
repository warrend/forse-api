const admin = require('firebase-admin')

const config = require('../config')

const forseDatabaseUrl = config.FORSE_DATABASE_URL

module.exports = admin.initializeApp({
  credential: admin.credential.cert(config.SERVICE_ACCOUNT_KEY_PATH),
  databaseURL: forseDatabaseUrl
})
