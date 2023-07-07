//todas las funciones asyncronas retornan una promesa 
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

realizarPedido('taza');