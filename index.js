const num1 = document.getElementById("op1");
const num2 = document.getElementById("op2");
const operador = document.getElementById("operador");
const botonCalculo = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

botonCalculo.addEventListener('click', calcular)

function calcular(){
    const operadorValue = operador.value;
    const operador1 = parseFloat(num1.value);
    const operador2 = parseFloat(num2.value);
        if(!isNaN(operador1) && !isNaN(operador2)){
            let resultado; 
            switch(operadorValue){
                case "+": resultado = `El resultado de tu suma es: ${operador1 + operador2}`;
                break;

                case "-": resultado = `El resultado de tu resta es: ${operador1 - operador2}`;
                break;

                case "*": resultado = `El resultado de tu multiplicación es: ${operador1 * operador2}`;
                break;

                case "/": resultado = `El resultado de tu división es: ${operador1 / operador2}`;
                break;

                default: alert("Ingresa una operación valida.");
                document.location.reload();
            }
            pResultado.innerText = resultado;  
        }
        else {
            alert("Ingresa operadores validos.");
            document.location.reload();
        }
}



