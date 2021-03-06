/* 1. Obtén del 1 al 255: Escribe una función que devuelve un array con
todos los números del 1 al 255. */
function numAl255(){
    var numerosAl255 = []
    for (i = 1; i <= 255; i++){
        numerosAl255.push(i);
    }
    return numerosAl255;
}

// 2. Suma numeros pares hasta 1000
function pares_hasta_1000() {
    var sumaTotal = 0;
    for (var i = 2; i <= 1000; i = i + 2) {
        sumaTotal += i;
    }
    return sumaTotal;
}


// 3. Suma impares hasta 5000: Escribe una función que devuelva la suma de todos
// los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function impares_hasta_5000() {
    var sumaTotal = 0;
    for (var i = 1; i <= 5000; i = i + 2) {
        sumaTotal += i;
    }
    return sumaTotal;
}

// 4. Itera un array: Escribe una función que devuelva la suma
// de todos los valores dentro de un array 
function itera_array(array) {
    var sumaTotal = 0;
    for (var i = 0; i < array.length; i++) {
        sumaTotal = sumaTotal + array[i];
    }
    return sumaTotal;
}

// 5. Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva
// el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).
function max(arr) {
    var maximo = arr[0];
    for (var i = 0; i < arr.length; i++)
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
    return maximo
}




// 6. Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el
// promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function promedio(arr) {
    var suma = itera_array(arr);
    var prom = suma / arr.length;
    return prom
}

// 7. Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50
function arrImpar() {
    var impares = [];
    for (i = 1; i <= 50; i += 2) {
        impares.push(i);
        console.log(i);
    }
    return impares;
}

/* 8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y.
Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).*/
function mayorA(arr, num) {
    var num = arr[num];
    var arrNuevo = []
    for (i = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            arrNuevo.push(arr[i]) // SI NUM ES MENOR A [i] DEL ARRAY, agrega [i] al nuevo array                  
        }
    }
    return arrNuevo
}

/* 9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor
(ej: [1,5,10,-2] será [1,25,100,4]).*/
function alCuadrado(arr) {
    var arrCuadrado = []
    for (i = 0; i < arr.length; i++) {
        arrCuadrado.push(arr[i] * arr[i]);
    }
    return arrCuadrado
}

/* 10. Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0.
Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).*/
function noNeg(arr) {
    var arrNoNeg = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arrNoNeg.push(0);
        } else {
            arrNoNeg.push(arr[i]);
        }
    }
    return arrNoNeg;
}

/* 11. Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor
 (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]). */
function maxMinAvg(arr) {
    var temp = [];
    var max = arr[0];
    var avg = 0
    var min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        avg += arr[i];
    }
    temp.push(max);
    temp.push(min);
    temp.push(avg / arr.length);
    return temp;
}

/* 12. Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array.
La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).*/
function cambiaExtremos(arr) {
    var temp = arr;
    var x = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = x
    return temp;
}

/* De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’.
Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]. */
function numString(arr) {
    var dojoArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            dojoArr.push("Dojo");
        } else {
            dojoArr.push(arr[i]);
        }
    }
    return dojoArr;
}