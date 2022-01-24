function getMousePosition(event) {
    // event.preventDefault();
    console.log(event.clientY, event.clientX);
    let caja = document.getElementById("caja");

    if (event.clientY <= 100) {
        caja.style.top = `0`;
    } else {
        caja.style.top = `calc(${event.clientY}px - 100px)`;
    }
}

document.addEventListener('click', getMousePosition);