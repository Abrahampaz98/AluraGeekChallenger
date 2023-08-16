import {productServices} from "./serivicos/product-services.js";
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

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const Url = new URL(window.location);
    const id = Url.searchParams.get("id");
    const imageurl =document.querySelector("[data-url]").value;
    const name =document.querySelector("[data-name]").value;
    const price =document.querySelector("[data-price]").value;
    const descripcion =document.querySelector("[data-descripcion]").value;
    try {
    await productServices.actualizarproducto(imageurl,name,price,descripcion,id);
    window.location.href="./screens/productos.html"; 
    } catch(error) {
    alert("Ocurrió un error");
    }
});
