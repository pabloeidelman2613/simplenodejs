//while

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//switch
var hora = 15;

switch (hora) {
    case 10:
        console.log('son las 10 de la mañana');
        break;
    case 15:
        console.log('son las 15 de la tarde');
        break;
    default:
        console.log('no tengo saludo a esa hora');
        break;
}

//funciones


function suma(num1, num2) {
    return console.log(num1 + num2);
}

suma(10, 63);

function suma_y_muestra(num1, num2) {
    resultado = num1 + num2;
    alert("El resultado es: " + resultado);
}

suma_y_muestra(55, 45);