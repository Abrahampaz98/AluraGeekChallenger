import {productServices} from "../serivicos/product-services.js";
const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () => {
    const Url = new URL(window.location);
    const id = Url.searchParams.get("id");
    if(!id) {
    alert("ocurrio un error");
    return; 
    }
    const imageurl =document.querySelector("[data-url]");
    const name =document.querySelector("[data-name]");
    const price =document.querySelector("[data-price]");
    const descripcion =document.querySelector("[data-descripcion]");
    try {
    const perfil = await productServices.editarproducto(id);
    if(perfil.id) {
        imageurl.value = perfil.imageUrl;
        name.value=perfil.name;
        price.value=perfil.price;
        descripcion.value=perfil.descripcion;
    } else {
        throw new Error("Perfil inválido");
    }
    } catch(error) {
    alert("error");
    }
}
obtenerInfo();

function obtenerIdProducto() {
    const urlActual = window.location.href;
    const url = new URL(urlActual);
    const idProducto = url.searchParams.get("id");
    if(!idProducto) {
    throw new Error("No se encontró id de producto en la URL"); 
    }
    return idProducto;
};
const id = obtenerIdProducto();

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
try {
    const respuesta = await productServices.eliminarProducto(id);
    window.location.href="../screens/productos.html"; 
    if(!respuesta.ok) {
    throw new Error("Error al eliminar"); 
    }
    alert("Eliminado!");
} catch(error) {
    alert(error.message);
}
});