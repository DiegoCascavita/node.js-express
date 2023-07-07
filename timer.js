function sumar(a,b ){
    console.log(a + b)
}

setTimeout(sumar,5000,5,6)//cuenta regresiva
setImmediate(sumar, 1,1)//ejecuta inmediatamente
setInterval(sumar, 1000, 2,2)//ejecuta cada cierto tiempo