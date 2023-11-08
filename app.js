function verificarprimo() {
    let numero = parseInt(document.getElementById("entrada").value);
    let indicadorprimo = true;
    let salida = "";

    if (numero == 1) {
        salida = "1 no es un numero primo.";
    } else if (numero > 1) {
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                indicadorprimo = false;
                break;
            }
        }

        if (indicadorprimo) {
            salida = `${numero} es primo.`;
        } else {
            salida = `${numero} no es primo.`;
        }
    } else {
        salida = `${numero} no es primo.`;
    }

    document.getElementById("texto-salida").innerHTML = salida;
}

function calculate(operation) {
    var matrix1 = JSON.parse(document.getElementById('matrix1').value);
    var matrix2 = JSON.parse(document.getElementById('matrix2').value);
    var result;

    switch (operation) {
        case 'sum':
            result = sum(matrix1, matrix2);
            break;
        case 'subtract':
            result = subtract(matrix1, matrix2);
            break;
        case 'multiply':
            result = multiply(matrix1, matrix2);
            break;
    }

    document.getElementById('result').innerHTML = JSON.stringify(result);
}

function sum(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

function subtract(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }
    return result;
}

function multiply(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function calcularSuma() {
    // Obtener los valores de A y B
    var a = parseInt(document.getElementById("valorA").value);
    var b = parseInt(document.getElementById("valorB").value);

    // Validar que A sea menor o igual que B
    if (a > b) {
        alert("El valor de A debe ser menor o igual que B");
        return;
    }

    // Calcular la suma
    var suma = 0;
    for (var i = a; i <= b; i++) {
        suma += i;
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
}

function contarVocales() {
    // Obtener el valor de la cadena de texto
    var texto = document.getElementById("texto").value;

    // Convertir el texto a minúsculas 
    texto = texto.toLowerCase();

    // Declarar un arreglo con las vocales
    var vocales = ["a", "e", "i", "o", "u"];

    //  contador de vocales
    var contador = 0;

    
    for (var i = 0; i < texto.length; i++) {
        // Verificar 
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    // resultado
    document.getElementById("resultado").innerHTML = "El número de vocales es: " + contador;
}
