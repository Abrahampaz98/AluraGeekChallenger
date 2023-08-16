import {productServices} from "./serivicos/product-services.js";

const crearLinea= async (name,imageUrl,price,id)=>{
    const card=document.createElement("div");
    const contenido=`
    <div class="producto">
    <img class="producto__img" src="${imageUrl}">
    <h1 class="producto__nombre">${name}</h1>
    <p class="producto__precio">$${price}</p>
    <a class="producto__ver" href="./screens/only-product.html?id=${id}">Ver Producto</a>
    <div>
    <button class="btn__update"><a href="./screens/edit-product.html?id=${id}"><img src="./img/boton-editar_adobe_express.svg" class ="btn"></a></button>
    <button class="btn__update"><a href="./screens/delete-product.html?id=${id}"><img src="./img/eliminar_adobe_express.svg" class ="btn"></a></button>
    </div>
    </div>`;
    card.innerHTML=contenido;
    return card;
}
const table =document.querySelector("[data-product]");
try {
    const data =await productServices.listaProducto();
    data.forEach(async ({name,imageUrl,price,id}) => {
        const nuevaLinea=await crearLinea(name,imageUrl,price,id);
        table.appendChild(nuevaLinea);
    });
} catch (error) {
    alert("ocurrio un error");
}