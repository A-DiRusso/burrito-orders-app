const http = require('http');

const Burrito = require('../models/burrito');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( async (req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/burrito') {
        const allBurritos = await Burrito.getAll();
        const burritosJSON = JSON.stringify(allBurritos);
        res.end(burritosJSON);
    } else {
        res.end(`{
            message: "!Gracias dios, por los burritos!"
        }`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});