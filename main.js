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

comida = ['patata', 'coche']
bebida = ['tomate']

const combineTwoArrays = (com, beb) => {
    let arrayCombinada = [...com, ...beb]
    console.log(arrayCombinada)
}
combineTwoArrays (comida, bebida)

// 3. Extras

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};


// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
const {today:maximaHoy, tomorrow:maximaManana } = HIGH_TEMPERATURES

console.log(maximaHoy)
console.log(maximaManana)


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...args) => {
    let onlyArray = [...new Set(args)]
    console.log(onlyArray)
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...variasArrays) => {
    let unicArray = []
    variasArrays.forEach (singleArray => {
        unicArray = unicArray.concat(singleArray)
    })
    console.log(unicArray)
}

combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const exponente = 2;

const sumAndSquare = (...anyArgument) => {
    let counter = 0
    anyArgument.forEach (argu => {
        counter += Math.pow(argu, exponente)        
    })
    console.log(counter)
}

sumAndSquare (2, 2, 3)
