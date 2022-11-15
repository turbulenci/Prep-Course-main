// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils")

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0] 
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

return array[array.length -1]

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length

}



function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código: 
  let nuevoarray = []
  for(i=0; i<array.length; i++){
  nuevoarray.push(array[i]+1)
   }

  return nuevoarray
 

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 array.push(elemento)
 return array
}
 



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

//  let  nuevoa = []
//  for (let i = 0; i < palabras.length; i++) {
//    const element = palabras[i];
//    nuevoa.push(element)    
//  }

 let result = palabras.join(" ")
  //console.log(result)
 return result

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
if(array.includes(elemento))return true

return false
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
let total = 0
for (let i = 0; i < numeros.length; i++) {
   
  
     total += numeros[i];


}

return total

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
 let total = 0
  for (let i = 0; i <resultadosTest.length; i++) {
    const e = resultadosTest[i];
        
  total += e    
  }

  return total/resultadosTest.length

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:}
let mayores = (2, 5, 3)
for (let i = 0; i < numeros.length; i++) {
 if (numeros[i] > mayores){
  mayores = numeros[i];
} 
} 
return mayores 
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 //console.log(arguments)


 //let vale = 0
// console.log(vale)

let multipli = 1;
  
if (arguments.length === 0) {
  
  return 0;

   } else if (arguments.length === 1) {  

    return arguments[0];
   } else  {

    for(let i = 0; i < arguments.length; i++) {
    
    
      multipli *= arguments[i];

   } 
  }

return  multipli





}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let cantidad2 = []
  for (let i = 0; i < arreglo.length; i++) {
   if (arreglo[i] > 18){
    cantidad2.push(arreglo[i])
   }
  }
  return cantidad2.length
//let cantidad = 0
//for (let i = 0; i < arreglo.length; i++) {
// if (arreglo[i] > 18){
//  cantidad++
// }
//}
//return cantidad



}

  



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  if (numeroDeDia == 7) return "Es fin de semana";
  if (numeroDeDia == 1) return "Es fin de semana";
else if(numeroDeDia == 2) return "Es dia Laboral";
else if(numeroDeDia == 3) return "Es dia Laboral";


} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let valorString = n.toString()
  if (valorString[0] == 9){
    return true
  }else{
    return false 
  }

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
 for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] === arreglo[i+1])
  return true
 }
 return false
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = []
  for (let i = 0; i < array.length; i++) {
  
   if ( array[i]== "Marzo" ){

    meses.push(array[i])
   } 
   if ( array[i]== "Noviembre" ){

    meses.push(array[i])
   } 
   if ( array[i]== "Enero" ){

    meses.push(array[i])
   }  

    
  }

  console.log(meses.length)

  if (meses.length == 2 ) return "No se encontraron los meses pedidos"

return meses

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoarray = []
  for (let i = 0; i < array.length; i++) {
  if (100 < array[i]){
    nuevoarray.push(array[i])
  }
  }
  return nuevoarray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'



  // Tu código:
const resul = []
let i = 0
let currentvalue = numero

do {
  currentvalue = currentvalue + 2;
  resul.push(currentvalue);
  i++
  if(i === currentvalue){
    break
  }
}
while(i < 10);

if(resul.length === 10){
  return resul
} else {
  return "Se interrumpió la ejecución" 
}

}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let contener = []
  let suma = numero
  for (let i = 0; i < 10; i++) {
  if (i === 5)continue
else 
suma = suma + 2
  contener.push(suma)

  }
  return contener
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
