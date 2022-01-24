let divCaja = document.querySelector("#caja");//div de la caja
let body = document.querySelector("#body");

function moverCaja () {
    console.log("hola");

    document.onclick = function(event) {

        y = event.clientY
        x = event.clientX;

        if (event.clientY <= 100) {
            divCaja.style.top = `0`;
          } else {
            divCaja.style.top = `calc(${event.clientY}px - 50px)`;
          }

      console.log(divCaja.style.top);
  } 

}




