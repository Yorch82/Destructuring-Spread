const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

  
// Extrae la empleada Ana con todos sus datos personales:

const [ ,anita, ] = empleados
console.log(anita)

// Extrae el email del empleado Luis --> Luis@gmail.com

const [empleadoLuis, , ] = empleados
const {email:correoLuis} = empleadoLuis
console.log(correoLuis)

// Usa la desestructuración para intercambiar los valores de a y b

let a = 5;
let b = 3;

const cambiavalor = ({a = 3, b = 5}) => {
    console.log(a, b)
}
cambiavalor (a, b)

// 2. Ejercicios spread/rest

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

// sumEveryOther(6, 8, 2, 3, 1); //20
// sumEveryOther(11, 3, 12); //26

const sumEveryOther = (...numerosParaSumar) => {
    let contador = 0
    numerosParaSumar.forEach( numero =>{
        contador += numero
    })
    
    console.log(contador)
}
sumEveryOther(6, 8, 2, 3, 1, 1)

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

const addOnlyNums = (...sumaTodo) => {
    let contador = 0
    sumaTodo.forEach (esNumero => {
        console.log(typeof(esNumero))
        if (typeof(esNumero) == "number"){        
            contador += esNumero
        }
    })    
    console.log(contador)
}
addOnlyNums(1, 'perro', 2, 4); //7

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...argumentosRecibidos) => {
    contador = 0;
    argumentosRecibidos.forEach (argumento => {
        contador += 1
    })
    console.log (`He recibido ${contador} argumento/s`)
}

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
