// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.keys(objeto).map(function (key) {return [String(key), objeto[key]];});
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};

  for(let i = string.length-1; i != -1 ; i--){
    if(objeto.hasOwnProperty(string.charAt(i))){
      objeto[string.charAt(i)] += 1; 
    } else {
      objeto[string.charAt(i)] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  let mayus = "";
  let minus = "";
  for(let i = 0; i < s.length; i++){
    if(letras.includes(s.charAt(i))){
      mayus += s.charAt(i);
    } else {
      minus += s.charAt(i);
    }
  }
  return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(" ");
  let frase = "";

  for(let i = 0; i < array.length; i++){
    for(let i2 = array[i].length-1; i2 != -1; i2--){
      frase += array[i].charAt(i2); 
    }
    frase += " ";
  }
  frase = frase.trim();
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let reves = "";
  let num = numero.toString();
  for(let i = num.length-1; i != -1; i--){
    reves += num.charAt(i);
  }
  reves = Number(reves);
  if(reves === numero){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadena2 = "";
  for(let i = 0; i < cadena.length; i++){
    if(cadena.charAt(i) === 'a' || cadena.charAt(i) === 'b' || cadena.charAt(i) === 'c'){
      continue;
    } else {
      cadena2 += cadena.charAt(i); 
    }
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((p1, p2) => p1.length - p2.length);;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let match = [];  
  for(let i = 0; i < arreglo1.length; i++){
    for(let i2 = 0; i2 < arreglo2.length; i2++){
      if(arreglo1[i] === arreglo2[i2]){
        match.push(arreglo1[i]);
        break;
      }
    }
  }
  return match;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

