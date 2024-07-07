import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

/*cada vez que llamo a esta clase se crea la card de un producto*/
function crearCard(nombre, precio, imagen){
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = `<img class="card-img" src="${imagen}" />
                    <div class="card-container--info">
                        <p class="nombre_prod">${nombre}</p>
                        <div class="card-container--value">
                            <p class="card_precio">${precio}</p>
                            <img src="./assets/icon _trash 2_.png" />
                        </div>
                    </div>`;
    return producto;
}

async function listarProductos(){
    const listAPI = await conexionAPI.listarProductos();
    
    listAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)))
}

listarProductos();