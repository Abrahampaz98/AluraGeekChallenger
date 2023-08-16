const listaProducto=()=>fetch("http://localhost:3000/productos").then((response)=>response.json());


const crearProducto=(name,imageUrl,price,descripcion)=>{
    return fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({name,imageUrl,price,id:uuid.v4(),descripcion})
        });
};

const eliminarProducto = async (id) => {
    const url = `http://localhost:3000/productos/${id}`;
    const respuesta = await fetch(url, {
        method: "DELETE"
    });
    if(respuesta.ok) {
    console.log('Producto eliminado');
    } else {
    console.log('Error:', respuesta.statusText); 
    }
};

const editarproducto=(id)=>{
    return fetch(`http://localhost:3000/productos/${id}`).then((response)=>
    response.json()
    );
};

const actualizarproducto=(imageUrl,name,price,descripcion,id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({name,imageUrl,price,descripcion}),
    }).then((response)=> response
    ).catch((error)=>alert("ocurrio un error"));
};

export const productServices={
    listaProducto,
    crearProducto,
    eliminarProducto,
    editarproducto,
    actualizarproducto,
};