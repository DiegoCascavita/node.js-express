const http = require('http');
const cursos = require('./cursos.js');

const server = http.createServer((req, res) => {
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGet(req, res);
        default:
            console.log(`el metodo usado no esta permitido ${method}`);
    }
})

function manejarSolicitudGet(req, res){
    let path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        res.end('Servidor funcionando');
    }else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos))
    }
}

const puerto = 3000;

server.listen(puerto, () => {
    console.log(`Server is running on port ${puerto}`)
})