// FUNDAMENTOS BASICOS II
   
// 3. Imprimir el penúltimo y retornar el primer número impar
 function imprime_penu_ret_impar(array) {
   // Primero imprimimos el penúltimo
   var pos_penultimo = array.length - 2;
   var penultimo = array[pos_penultimo];
   console.log(penultimo);
   /*
   versión corta
   console.log(array[array.length - 2]);
   */
   // Ahora retornamos el primer impar
   for (var i=0; i<array.length; i++) {
     if (array[i] % 2 == 1) {
       return array[i];
     }
   }
 }

 // 6. Pares e impares
 function pares_impares(array) {
   // [3, 6, 3, 9, 1, 0 ,33] 
   //  0  1  2  3  4  5  6
   // array.length == n, ultima pos es la n-1,
   // puedo mirar hasta la n-3
   for (var i=0; i <= array.length-3; i++){
     if (array[i]%2==0 && array[i+1]%2==0 && array[i+2]%2==0){
       console.log('Es para bien!');
     }
     if (array[i]%2==1 && array[i+1]%2==1 && array[i+2]%2==1){
       console.log('Que imparcial!')
     }
   }
 }
 // 8. Longitudes Previas
 //  ej: ["Peras", "Manzanas", "Platanos", "Uva", "Ciruelas", "Higos"]

 function longitudesPrevias(array) {
   
   for (var i=array.length - 1; i >= 1; i--) {
     var string_anterior = array[i-1];
     var largo_anterior = string_anterior.length;

     array[i] = largo_anterior;
   }

   return array;
 }

 // FUNDAMENTOS INTERMEDIOS
 // 3. Fibonacci
 function fibonacci(indice) {

   if (indice == 0) {
     return 0;
   } else if (indice == 1) {
     return 1;
   }
   // si no entró en ninguna de las anteriores,
   // sabemos que indice > 1
   return fibonacci(indice - 1) + fibonacci(indice - 2);
 }
 /*
   5! = 5*4*3*2*1
   6! = 6*5*4*3*2*1
   n! = n * (n-1)!
   0! = 1
 */
 function factorial(n) {
   if (n == 0) {
     return 1;
   }
   return n * factorial(n-1);
 }
 // 6. Devuelve el segundo más grande
 function segundoMayor(array) {
   if (array.length < 2) {
     return null;
   }
   var mayor = array[0];
   for (var i=0; i<array.length; i++) {
     if (array[i] > mayor) {
       mayor = array[i];
     }
   }
   // ya tenemos el más grande
   var segundo = array[0];
   for (var i=0; i<array.length; i++) {
     if (array[i] > segundo && array[i] != mayor) {
       segundo = array[i];
     }
   }
   return segundo;
 }