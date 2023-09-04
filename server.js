const http = require('http')
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);
    if(isNaN(port)) return val;
    if(port >= 0) return port;
    return false;
}

const port = normalizePort(3000);
app.set('port', port);


const server = http.createServer(app);
server.on('error', () => {
    console.log('erreur lors du demarage du serveur')
});
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + port : 'port : ' + port;
    console.log(`listening on port : ${bind}`);
});

server.listen(port);