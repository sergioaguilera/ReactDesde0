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

console.log("***PRIMERA PRACTICA DEL CURSO: USAR FUNCIONES DE FLECHA PARA SUMAR DOS NUMEROS EN EL MENOR NUMERO DE LINEAS POSIBLE.")
console.log(resultado)



console.log("***SEGUNDA PRACTICA DEL CURSO: AGREAR UN ARRAY AL OBJETO MASCOTA.")

const mascota={
    nombre:'Rex',
    edad: 5 ,
    vivo:true,
    familares:['sergio','carolina','santiago']
}

console.log(mascota)

console.log('podemos incluso, mandar llamar, solo la informacion necesaria del objeto, por ejemplo, el nombre de la mascota: '+mascota.nombre)

console.log("***TERCER PRACTICA DEL CURSO: DESTRUCTURING OBJECTS")
console.log("Podemos acceder a la informacion dentro de los objetos, sin necesidad del llamar todo el objeto en cuestion")

const{edad} = mascota
console.log(edad)   

console.log("***CUARTA PRACTICA DEL CURSO: PRACTICANDO CON OBJETOS")

const personal ={
    nombre:'Sergio Aguilera',
        web:{
            enlace: 'overcode.com.mx'
        },

        redesSociales:{
            instagram: 'instagram.com/megaorko',
            twitter: 'twitter.com/megaorko'
        }

}

const {redesSociales}=personal

console.log('tenemos que pintar las redes sociales en este console log => '+ redesSociales.twitter+' y '+redesSociales.instagram)

console.log('***QUINTA PRACTICA DEL CURSO: FETCH API')
fetch('https://pokeapi.co/api/v2/pokemon')

.then( res =>  res.json())
// Recordar que una funcion de flecha SIEMPRE retorna lo que esta justo a lado de la flecha sin necesidad de un return
.then (data=>{
    
    //console.log(data.results)
    data.results.forEach(element => {
        console.log(element)
    });

}) 

console.log('***SEXTA PRACTICA DEL CURSO: ASYNC Y AWAIT')

const obtenerPokemones=  async() => {
try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data=  await res.json()
    console.log(data.results)
    console.log(data.results.map(poke=> poke.name))
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemones()


