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
            imagen: imagen/*fijarse para que se guarde en assets */
        })        
    })
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el producto");
    }
    return conexionConvertida;
}

async function buscarProducto(id){
    const conexion = await fetch(`http://localhost:3001/productos?id=${id}`);

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function borrarProducto(id){
    //console.log("conexionAPI->eliminar a: ",id);
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
        method: "DELETE"   
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

//exportamos la funcion
export const conexionAPI={
    listarProductos, enviarProducto, borrarProducto, buscarProducto
}