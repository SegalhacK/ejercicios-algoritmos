function a() {
    console.log('hola');
}
console.log('Dojo');

--> Dojo // La funcion a se definió pero no se ejecutó

//

function b() {
    console.log('hola');
    return 15;
}
var x = b();
console.log('x es', x);

--> hola, x es 15 // Preguntar!

//

function a(n) {
    console.log('n es', n);
    return n + 15;
}
var x = a(3);
console.log('x es', x);

--> n es, 3, x es, 18 // cuando se declara la variable se ejecuta la funcion

//

var z = 15;
console.log(z);
function a(z) {
    console.log(z);
    return z;
}
var b = a(10);
console.log(b);
console.log(z);

--> 15, 10, 10, 15 // dentro de una funcion las variables aunque tengan mismo nombre son distintas al entorno GLOBAL.

//

var c = 15;
console.log(c);
function d(c){
   console.log(c);   
   return c*2;
}
var e = d(10);
console.log(e);
console.log(c);

--> 15,10,20,15 // misma logica del ejercicio anterior

//

function a(n) {
    console.log('n es', n);
    y = n*2; 
    return y;
}
var x = a(3) + a(5); // a(3) --> 3*2 --> 6 // a(5) --> 5*2 --> 10 // 6 + 10 = 16
console.log('x es', x);

--> n es,3,n es 5, x es,16

//

function x(num1, num2) {  
    return num1+num2;
 }
 console.log(x(2,3))
 console.log(x(3,5))

 --> 5,8 // suma

//

function y(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))

 --> 2,5,3,8

 //

 function z(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = z(2,3) + z(3,5);
console.log('x es', x);

--> 