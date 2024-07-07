async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre: nombre,
            precio: `$ ${precio}`,
            imagen: `./assets/${nombre}.png`/*fijarse para que se guarde en assets */
        })        
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

//exportamos la funcion
export const conexionAPI={
    listarProductos, enviarProducto
}