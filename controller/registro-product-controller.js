import {productServices} from "./serivicos/product-services.js";

const formulario=document.querySelector("[data-form]");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const url =document.querySelector("[data-url]").value;
    const name =document.querySelector("[data-name]").value;
    const price =document.querySelector("[data-price]").value;
    const descripcion =document.querySelector("[data-descripcion]").value;
    productServices.crearProducto(url,name,price,descripcion).then(()=> window.location.href="./screens/productos.html")
    .catch((error)=>alert("ocurrio un error"))
});