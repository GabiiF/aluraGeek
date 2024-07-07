const formulario = document.querySelector("[data-formulario]");

function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

}

formulario.addEventListener("submit", evento=> crearProducto(evento));