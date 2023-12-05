//ESTO ES UN SIMULADOR DE GOLOSINAS EN EL QUE SE INGRESA UN NUMERO PARA RECIBIR CIERTO PRODUCTO

//DECLARO LOS CONTADORES DE LAS GOLOSINAS
let chupetin = 0;
let chocolate = 0;
let alfajor = 0;

//LE DEJO AL USUARIO ELEGIR GOLOSINAS 3 VECES
for (let index = 0; index < 3; index++) {
    let productoElegido = parseInt(prompt("Ingrese el codigo de producto deseado (1, 2 o 3)"));

    //DECIDO EN FUNCION DEL CODIGO DE PRODUCTO
    switch (productoElegido) {
        case 1:
            chupetin++;
            break;
        case 2:
            chocolate++;
            break;
        case 3:
            alfajor++;
            break;
        default:
            alert("Ingrese un codigo valido");
            index--; //DECREMENTO EL CONTADOR Y REESTABLEZCO EL INTENTO FALLIDO
            break;
    }
}
//DOY EL MENSAJE CON LAS CANTIDADES ELEGIDAS
alert("Usted recibe"+" Chupetines: "+chupetin+" Chocolates: "+chocolate+" Alfajores: "+alfajor);
