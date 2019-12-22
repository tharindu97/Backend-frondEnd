const app = require('./app');
const { connect } = require('./database');

async function main() {
    // Database connecting
   await connect();
   await app.listen(4001)
   console.log('port is 4001: Connected');
}

main();