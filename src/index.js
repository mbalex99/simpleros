const RealmObjectServer = require('realm-object-server').Server
const server = new RealmObjectServer()

server.start()
    .then(() => {
        console.log('Realm Object Server Started! On Port 9080')
    })
    .catch(err => {
        console.log(`Uh oh! ${err.toString()}`)
    })