/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   // console.log(Object.entries(objeto));
   
   //SOLUCION 1 
   // let arrayA = Object.entries(objeto);
   // return arrayA;

   // SOLUCION 2
   let arrayB = [];
   for(let property in objeto) {
      //console.log(property, objeto[property]);
      arrayB.push([property, objeto[property]]);
      //console.log(arrayB);
   } 
   return arrayB;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   //SOLUCION 1
   // let array = string.split("").sort();
   // console.log(array);
   // let objeto = {};

   // for(let i =0; i < array.length; i++) {
   //    if(!objeto[array[i]]){
   //       objeto[array[i]] = 0;
   //    } objeto[array[i]]++;
   // }

   // console.log(objeto);
   // return objeto;

   //SOLUCION 2
   let obj = {};
   for(let char of string.split("").sort()) {
      if(obj.hasOwnProperty(char)) {
         obj[char] += 1;
      } 
      else {
         obj[char] = 1;
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let array = string.split("");
   let arrayUpperCase = [];
   let arrayLowerCase = [];
   //console.log(array);

   for(let char of array) {
      if(char == char.toUpperCase()){
         arrayUpperCase.push(char);
      } else {
         arrayLowerCase.push(char);
      }
   }
   //console.log(arrayUpperCase.join("") + arrayLowerCase.join(""))
   return arrayUpperCase.join("") + arrayLowerCase.join("");

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let splitFrase = frase.split(" "); // Pasamos el string a un array para poder iterar sobre el, la separación sera por palabras por lo que se agrega un espacio en el split(" ")
   //console.log(splitFrase);
   let finalFrase = []; // declaramos un nuevo array que contendra la frase modificada
   
   for(let char of splitFrase){ // iteramos con un for of donde char = cada palabra que es una posicion del array splitFrase
      let invertWord = char.split("").reverse().join(""); // se aplica método split de nuevo para separar en letras las palabras, se aplica el método reverse para invertir el orden de las letras y por ultimo se unen de nuevo con el método join.
      finalFrase.push(invertWord); // se pushean el resultado en el array para la frase modificada
   }
   //console.log(finalFrase);
   //onsole.log(finalFrase.join(" "), "test");
   return finalFrase.join(" "); // se aplica join de nuevo para unir las palabrasen un solo string, de nuevo con un espacio en el join(" ")

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   //UN CAPICUA es todo numero que se puede leer igual ya sea de derecha a izquierda
   //como de izquierda a derecha : EJemplo 303, 202, 555, 878...
   
   if((numero.toString().split("").reverse().join("")) === numero.toString()){  // convertimos el número a string, pasamos a un array, invertimos y unimos en un nuevo string, comparamos estricta igualdad con el string del numero original
      return "Es capicua"; // si la coinsidencia de los string es correcta es capicua
   } else {
      return "No es capicua"; 
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   //console.log(string);
   let array = string.split(""); // covertimos string a un array separado por caracter
   let newarray = []; // declaramos nuevo array para almacenar el resultado

   for(let char of array) { // iteramos en el array que contiene el string de argumento
      if(char == "a" || char == "b" || char == "c"){ // la condicion es si el caracter es igual a "a" o "b" o "c" debera saltar y continiar
         continue;
      } 
      newarray.push(char); // empuja cualquier caracter que no cumpla con la anterior condiciòn
   }
   //console.log(newarray.join(""));
   return newarray.join(""); // regresa el nuevo array convertido en string.

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   arrayOfStrings.sort(function (a,b) {
      //console.log(a, b, "elemento")
      //console.log(a.length - b.length, "resta")
      return a.length - b.length;
   })
   //console.log(arrayOfStrings, "array");
   return arrayOfStrings;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   console.log(array1, array2);

   let interArray = array1.filter(element => array2.includes(element));
   console.log(interArray);
   return interArray; 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
