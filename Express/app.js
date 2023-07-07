const express = require('express')
const app = express()

const {infoCursos} = require('./cursos.js')

//routing
app.get('/', (req, res) => {
    res.send('mi primer server en node🙂')
})
//otra ruta
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})
//otra ruta
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
})
//url parameters
app.get('/api/cursos/programacion/:lenguaje',(req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)

    if(resultados.length === 0){
        return res.status(404)
        .send(`no se encontro cursos de ${lenguaje}`)
    }
    //parametro query

    if(req.query.ordenr === "vistas"){
        return res.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)))
    }
ini
    res.send(JSON.stringify(resultados))
})
// console.log(infoCursos)
//puerto
const PUERTO = process.env.port || 3000;
//listener
app.listen(PUERTO, ()=>{
    console.log(`Server is running on port ${PUERTO}`)
})