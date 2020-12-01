// Imprime los números enteros entre 1 y x. Si x es menor que 1, retorna false
function imprimeHasta(x) {
    if (x < 0) {
        console.log("false")
    } else {
        for (let i = 1; i <= x; i++) {
            console.log(i)
        }
    }
}

// Imprime todos los enteros desde el 0 hasta el 255. Al imprimir cada entero,
// debes imprimir la suma que se lleva. Retorna la suma final.
function printSum() {
    var sum = 0;
    for (let i = 0; i <= 255; i++) {
        console.log(i);
        console.log("suma acumulada = ", sum += i);
    }
    return sum
}
y = printSum() // imprime enteros desde el 0 hasta el 255, y la suma parcial en cada punto
console.log(y) // Done

TODO: //Debes imprimir la suma de todos los valores en el arreglo dado:

function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x.length[i];
    }
    return sum;
}
console.log(printSumArray([1, 2, 3])); // debe imprimir 6

TODO: // Escribe una función que retorne el mayor elemento del arreglo dado:

function mayorElem(x) {
    var mayorHastaAhora = x[0];
    // escribe tu código aquí
    return mayorHastaAhora;
}
console.log( mayorElem([8,3,11,2,-8]) ); // debe imprimir 11