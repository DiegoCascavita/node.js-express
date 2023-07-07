const express = require('express')
const app = express()
const {infoCursos} = require('./cursos.js')

//middleware
app.use(express.json())

//router
// const routerProgramacion = express.Router()
// app.use('/api/cursos/programacion')//base para las rutas de programacion


//routing
app.get('/', (req, res) => {
    res.send('mi server en node🙂')
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
        return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)))
    }

    res.send(JSON.stringify(resultados))
})
// console.log(infoCursos)

//post() CREATE

app.post('/api/cursos/programacion', (req, res) => {
    let cursoNuevo = req.body;
    infoCursos.programacion.push(cursoNuevo);
    res.send(JSON.stringify(infoCursos.programacion));
  });
  
//PUT() MODIFY

app.put('/api/cursos/programacion/:id',(req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = infoCursos.programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        infoCursos.programacion[indice] = cursoActualizado
    }
    res.send(JSON.stringify(infoCursos.programacion))
})
//DELETE()

app.delete('/api/cursos/programacion/:id',(req, res) => {
    const id = req.params.id;
    const indice = infoCursos.programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        infoCursos.programacion.splice(indice, 1)
    }
    res.send(JSON.stringify(infoCursos.programacion))
})

//puerto
const PUERTO = process.env.port || 3000;
//listener
app.listen(PUERTO, ()=>{
    console.log(`Server is running on port ${PUERTO}`)
})