

let presupuesto = 30;
let cantChocolates = 0;
let cantChupetines = 0;
let cantAlfajores = 0;
let sigueComprando = true;


function elegir() {
    let eleccion = parseInt(prompt("PRESUPUESTO: $" + presupuesto + ", (OPCION 1)Precio Chocolates: $30" + ", (OPCION 2)PrecioAlfajores: $20" + ", (OPCION 3)Precio Chupetines: $10"));
    return eleccion;
}
function preguntarSiSigue() {
    let sigue = prompt("¿Desea seguir comprando? (si/no)");
    return sigue;
}
function alertarValidez() {
    alert("Ingrese un valor válido (si o no)");
}
while (presupuesto > 0 && sigueComprando) {
    let eleccion = elegir();
    switch (eleccion) {
        case 1:
            if (presupuesto >= 30) {
                cantChocolates++;
                presupuesto -= 30;
                if (presupuesto > 0) {
                    let bandera = true;
                    while (bandera) {
                        let sigue = preguntarSiSigue();
                        switch (sigue) {
                            case "si":
                                sigueComprando = true;
                                bandera = false;
                                break;
                            case "no":
                                sigueComprando = false;
                                bandera = false;
                                break;
                            default:
                                alertarValidez();
                                break;
                        }
                    }
                }

                break;
            } else {
                alert("No alcanza el presupuesto para comprar chocolates");
                break;
            }
        case 2:
            if (presupuesto >= 20) {
                cantAlfajores++;
                presupuesto -= 20;
                if (presupuesto > 0) {
                    let bandera = true;
                    while (bandera) {
                        let sigue = preguntarSiSigue();
                        switch (sigue) {
                            case "si":
                                sigueComprando = true;
                                bandera = false;
                                break;
                            case "no":
                                sigueComprando = false;
                                bandera = false;
                                break;
                            default:
                                alertarValidez();
                                break;
                        }
                    }
                }
                break;
            } else {
                alert("No alcanza el presupuesto para comprar alfajores");
                break;
            }

        case 3:
            if (presupuesto >= 10) {
                cantChupetines++;
                presupuesto -= 10;
                if (presupuesto > 0) {
                    let bandera = true;
                    while (bandera) {
                        let sigue = preguntarSiSigue();
                        switch (sigue) {
                            case "si":
                                sigueComprando = true;
                                bandera = false;
                                break;
                            case "no":
                                sigueComprando = false;
                                bandera = false;
                                break;
                            default:
                                alertarValidez();
                                break;
                        }
                    }
                }
                break;
            } else {
                alert("No alcanza el presupuesto para comprar chupetines");
                break;
            }
        default:
            alert("Ingrese un valor válido (1/2/3)");
            break;
    }
}
alert("USTED RECIBE: " + "Chocolates: " + cantChocolates + " ,Chupetines: " + cantChupetines + " ,Alfajores: " + cantAlfajores + " PRESUPUESTO RESTANTE: $" + presupuesto);
