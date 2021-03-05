/*
const numero = (num1, num2) => {
    return `el numero es: ${num1 + num2}`
}

const resultado = numero(10,20)
console.log(resultado)
*/
//el ejercicio consta en  aprovechar las propiedades de las funciones de flecha para ahorrar codigo 

const numero = (num1, num2) => `el numero es: ${num1 + num2}`
const resultado = numero(10,20)

console.log("PRIMERA PRACTICA DEL CURSO: USAR FUNCIONES DE FLECHA PARA SUMAR DOS NUMEROS EN EL MENOR NUMERO DE LINEAS POSIBLE.")
console.log(resultado)



console.log("SEGUNDA PRACTICA DEL CURSO: AGREAR UN ARRAY AL OBJETO MASCOTA.")

const mascota={
    nombre:'Rex',
    edad: 5 ,
    vivo:true,
    familares:['sergio','carolina','santiago']
}

console.log(mascota)