async function realizarPedido(producto){
    try{
        const respuesta = ordenarProducto(producto);
        console.log('respuesta recibida')
        const respuestaProcesada = procesarPedido(respuesta);
        console.log(respuestaProcesada)
    } catch(error){
        console
    }
}

function ordenarProducto(producto){
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando ${producto}`);
        setTimeout(()=>{
            if(producto === "taza"){
                resolve('ordenando una taza')
            } else {
                reject('Este Producto no esta disponible')
            }
        },2000)
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve, reject)=>{
        console.log('Procesando Respuesta...')
        console.log(`La respuesta fue: ${respuesta}`)
        setTimeout(()=>{
            resolve('Gracias por su compra');
        },4000)
    });
}
//chaining promises
ordenarProducto('taza')
    .then(respuesta => {
        console.log('respuesta recibida')
        console.log(respuesta)
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada)
    })
    .catch(error => {
        console.log(error)
    })

realizarPedido('taza')
