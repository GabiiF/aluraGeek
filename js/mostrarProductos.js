import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

/*cada vez que llamo a esta clase se crea la card de un producto*/
function crearCard(nombre, precio, imagen,id){
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = `<img class="card-img" src="${imagen}" />
                    <div class="card-container--info">
                        <p class="nombre_prod">${nombre}</p>
                        <div class="card-container--value">
                            <p class="card_precio">${precio}</p>
                            <button class="delete-button" id="${id}" data-boton-eliminar>
                                <img src="./assets/icon _trash 2_.png"/>
                            </button>
                        </div>
                    </div>`;
    const btn = producto.querySelector("button");
    btn.addEventListener("click", ()=>{
        const id = btn.id; 
       conexionAPI.borrarProducto(id).then(respuesta=>{
        //console.log("mostrarProductos.js",respuesta);
       }).catch(err=>alert("Ocurrió un error"))
    })
    return producto;
}

async function listarProductos(){
    const listAPI = await conexionAPI.listarProductos();
    
    listAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)))
}

listarProductos();