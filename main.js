

let presupuesto = 100;
let cantChocolates = 0;
let cantChupetines = 0;
let cantAlfajores = 0;
let sigueComprando = true;
while (presupuesto > 0 && sigueComprando) {
    let eleccion = parseInt(prompt("Presupuesto: " + presupuesto + ", (OPCION 1)Precio Chocolates: 30" + ", (OPCION 2)PrecioAlfajores: 20" + ", (OPCION 3)Precio Chupetines: 10"));
    switch (eleccion) {
        case 1:
            if (presupuesto >= 30) {
                cantChocolates++;
                presupuesto -= 30;
                let bandera = true;
                while (bandera) {
                    let sigue = prompt("Desea seguir comprando? (si o no)" + " ,Presupuesto: " + presupuesto);
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
                            alert("Ingrese un valor válido (si o no)" + " ,Presupuesto: " + presupuesto);
                            break;
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
                let bandera = true;
                while (bandera) {
                    let sigue = prompt("Desea seguir comprando? (si o no)" + " ,Presupuesto: " + presupuesto);
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
                            alert("Ingrese un valor válido (si o no)" + " ,Presupuesto: " + presupuesto);
                            break;
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
                presupuesto -= 10; let bandera = true;
                while (bandera) {
                    let sigue = prompt("Desea seguir comprando? (si o no)" + " ,Presupuesto: " + presupuesto);
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
                            alert("Ingrese un valor válido (si o no)" + " ,Presupuesto: " + presupuesto);
                            break;
                    }
                }
                break;
        
                else {
                    alert("No alcanza el presupuesto para comprar chupetines");
                    break;
                }
            }
        default:
            alert("Ingrese un valor válido (1/2/3)");
            break;
    }
    alert("Usted recibe: " + "Chocolates: " + cantChocolates + " Chupetines: " + cantChupetines + " Alfajores: " + cantAlfajores);
