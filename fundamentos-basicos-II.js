/* 1. Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él,
por el string “big”.Ejemplo: grande([-1, 3, 5, -5]) devuelve[-1, “big”, “big”, -5].*/
function bigChange(arr) {
    var bigString = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            bigString.push("big");
        } else {
            bigString.push(arr[i]);
        }
    }
    return bigString;
}

/* 2. Imprime(print) el menor, devuelve(return) el mayor - Crea una función que tome un array de números.
La función debería imprimir(print) el menor valor del array, y devolver(return) el mayor. */
function printReturn(arr) {
    var min = 0;
    var max = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min);
    return max
}

/* 3. Imprime(print) uno, devuelve(return) otro - Crea una función para un array de números.
La función debería imprimir(print) el penúltimo valor y devolver(return) el primer valor impar. */
function printSwap(arr) {
    var primerImpar = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            primerImpar = arr[i];
            break;
        }
    }
    console.log(arr[arr.length - 2]);
    return primerImpar;
}

/* 4. Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique.
Entonces, doble([1, 2, 3]) debiera devolver[2, 4, 6] sin cambiar el array original.*/
function dobleVision(arr) {
    var arrDoble = [];
    for (i = 0; i < arr.length; i++) {
        arr[i] *= 2;
        arrDoble.push(arr[i]);
    }
    return arrDoble;
}

/* 5. Contar Positivos - Dado un array de números, crea una función para reemplazar el último valor
con el número de valores positivos encontrados en el array.Ejemplo, contarPositivos([-1, 1, 1, 1])
cambia el array original y devuelve[-1, 1, 1, 3]. */
function cuentaPositivos(arr) {
    var temp = arr;
    sum = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    temp[temp.length - 1] = sum;
    return temp;
}

/* 6. Pares e Impares - Crea una función que acepte un array.Cada vez que ese array tenga 3 valores
impares seguidos, imprime(print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos,
imprime(print) “¡Es para bien!”.*/
function parImpar(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) {
            console.log("¡Qué imparcial!")
        }
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("¡Es para bien!")
        }
    }
}

/* 7. Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento,
específicamente a aquellos cuyo índice es impar(arr[1], arr[3], arr[5], etc).Luego,
console.log cada valor del array y devuelve arr. */
function incremImpar(arr) {
    for (i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
        console.log(arr[i]);
    }
    return arr
}

/* 8. Longitudes previas - Pasado un array(similar a decir ‘tomado un array’ o ‘dado un array’) que
contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras(longitud) del
string anterior.Por ejemplo, longitudesPrevias([“programar”, “dojo”, “genial”]) debería devolver
[“programar”, 9, 4].Pista: ¿For loops solo puede ir hacia adelante ? */
function cambiaString(arr) {
    for (i = arr.length - 1; i >= 1; i--) {
        var string_anterior = arr[i - 1];
        var largo_anterior = string_anterior.length;

        arr[i] = largo_anterior;
    }
    return arr;
}

/* 9. Agrega Siete - Construye una función que acepte un array.Devuelve un nuevo array con todos los valores del original,
pero sumando 7 a cada uno.No alteres el array original.Por ejemplo, agregaSiete([1, 2, 3) debería devolver[8, 9, 10] en un nuevo array.*/
function plusSeven(arr) {
    var sevenified = [];
    for (i = 0; i < arr.length; i++) {
        arr[i] += 7;
        sevenified.push(arr[i]);
    }
    return sevenified;
}

TODO: /* 10. Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar.Ejemplo: invertir([3, 1, 6, 4, 2))
devuelve el mismo array pero con sus valores al revés, es decir[2, 4, 6, 1, 3].Haz esto sin crear un array temporal vacío.
(Pista: necesitarás intercambiar(swap) valores).*/
function inversor(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = temp;
    }
    return arr;
}

/* 11. Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original,
pero negativos(no simplemente multiplicando por - 1).Dado[1, -3, 5], devuelve[-1, -3, -5].*/
function negativize(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            continue
        } else {
            arr[i] *= -1;
        }
    }
    return arr;
}

/* 12. Siempre hambriento - Crea una función que acepte un array e imprima(print) “yummy” cada vez que alguno de los valores sea “comida”.
Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.*/
function hungry(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("yummy");
        } else {
            console.log("tengo hambre")
        }
    }
}

TODO: /* 13. Cambiar hacia el centro - Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc.
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a[“pizza¨, 42, “Ada”, true].cambiaHaciaElCentro([1, 2, 3, 4, 5, 6])
cambia el array a[6, 2, 4, 3, 5, 1].No es necesario devolver(return) el array esta vez. */
function cambiaCentro(arr) {
    for (i = 0; i < arr.length / 2; i += 2) {
        var izquierda = arr[i]
        var derecha = arr [arr.length - 1]
        arr[izquierda] = arr[derecha];
        arr[derecha] = arr[izquieda];
    }
}

/* 14. Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num,
y devuelve el array arr modificado.Por ejemplo, escalaArray([1, 2, 3], 3]debería devolver[3, 6, 9]. */
function escalaArray(arr, num) {
    var escalado = [];
    for (i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}