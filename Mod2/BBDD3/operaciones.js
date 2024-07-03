export * as ops from "./operaciones.js"

function sumar(a, b) {
    return  a + b;
}

function restar(a, b) {
   return a - b;
}

function dividir(a, b){
    if (b != 0){
        return a / b;
    }else {
        console.log("No se puede dividir por 0");
    }
}

function multiplicar(a, b){
    return a * b;
}