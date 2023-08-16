import { productServices } from "../serivicos/product-services.js";

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

const crearpresentacion=(name,imageUrl,price,descripcion)=>{
const card=document.createElement('div');
card.className="divo";
    const contenido=`
    <div>
    <img class="producto__img"src="${imageUrl}">
    </div>
    <div class="container">
    <h1 class="product__titulo">${name}</h1>
    <p class="product__descripcion">${descripcion}</p>
    <p class="product__precio">$${price}</p>
    </div>`;
    card.innerHTML=contenido;
    return card;
};
const presentacion=document.querySelector("[data-onlyProduct]");
try {
    const data= await productServices.editarproducto(id);
    console.log(data);
    const nuevapresentacion = crearpresentacion(data.name, data.imageUrl, data.price, data.descripcion);
    console.log(nuevapresentacion); 
    presentacion.appendChild(nuevapresentacion);
} catch (error) {
    alert("error en presentar");
    console.log(error);
}

