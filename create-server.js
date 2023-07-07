const http = require('http');

const servidor = http.createServer((req, res)=>{
    res.end('hola mundo');
})

servidor.listen(3000,()=>{//3000 es el puerto
    console.log('servidor en el puerto 3000');
})