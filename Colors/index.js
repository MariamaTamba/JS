document.addEventListener("DOMContentLoaded", function () {
    const tablaColorMesclado = document.getElementById("mix-color") // cogemos el tablero entero
    let colorFuente = null;

    //Para que el elemento sea arastable
    tablaColorMesclado.addEventListener("dragstart", function name(evento) {
        //Cogemos el color del fuente que esta dentro del evento
        colorFuente = evento.target.style.backgroundColor;

    });


    //Se activa mientras que le elemento se esta moviendo. 
    tablaColorMesclado.addEventListener("dragover", function (evento) {
        evento.preventDefault();

    });


    //El color se ejecutara cuando se suelta el elemento
    tablaColorMesclado.addEventListener("drop", function (evento) {
        evento.preventDefault();
        const colorDestino = evento.target.Style.backgroundColor;
        if (colorFuente && colorDestino) { // Ambos colores tiene un valor
            const colorMescaldo = MesclarColores(colorFuente, colorDestino)
            evento.target.style.backgroundColor = colorMescaldo;
        }

    });

    //El evento dragend se activa cuando el usuario ha terminado de arrastrar un elemento.
    tablaColorMesclado.addEventListener("dragend", function (evento) {
        colorFuente= null
        
    });

    //Solo se ejecutar cuando se pone en un sitio valido 
    tablaColorMesclado.addEventListener("dragenter" , function (evento) {
        if (colorFuente) {
            evento.target.style.backgroundColor = MesclarColores(colorFuente, evento.target.style.backgroundColor)
            
        }
        
    })











})