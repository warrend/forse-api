const app = require('./app.js')
const { server } = require('./env.js')

const start = async function() {
  app.listen(server.port, () => {
    console.log("Listening on " + server.port)
  })
}

start()
