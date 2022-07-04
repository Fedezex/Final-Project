const listaServicios=["Impresiones offset", "Impresiones laser", "Cortes"]

listaServicios.push("Laminado");
listaServicios.push("Barniz UV");
listaServicios.push("Encuadernación");
listaServicios.forEach((servicio)=>console.log(servicio));

let cantidadServicios=listaServicios.length

//Swal.fire ({title:"¡Tenemos "+cantidadServicios+" servicios para ofrecerle!"});


const servicios=["Impresiones Offset", "Impresiones Laser", "Cortes", "Barniz UV", "Laminado", "Encuadernacion"]

const parrafo =	document.getElementById("Servicios");

parrafo.innerHTML = "<b>Servicios Imprenta</b>"

const lista = document.getElementById("lista");



servicios.forEach(item => {
console.log(item);
const li = document.createElement("li")
li.textContent = item
lista.appendChild(li)
})

const container = document.querySelector(".container")
const span = document.getElementById("span")
let contador = 0

container.addEventListener("click",(e)=>{
if(e.target.classList.contains("btn-info")){
contador ++
span.textContent = contador
}
if(e.target.classList.contains("btn-danger")){
contador --
span.textContent = contador
}

})

localStorage.setItem("Servicios Imprenta", "Eleccion de Clientes")

let usuario = localStorage.getItem("Servicios Imprenta")
console.log(usuario);


// Sweet Alert
(async () => {

const {value:provincia} = await Swal.fire({
title:"¡Bienvenido!",
text: "Selecciona tu provincia",
confirmButtonText: "Seleccionar",
footer: "Informacion requerida",
padding: "1rem",
backdrop: true,
position: "center",
allowOutsideClick: true,
allowEscapeKey: false,
allowEnterKey: false,
stopKeydownPropagation: false,
input: "select",
inputPlaceholder: "Provincia",
inputValue: "",
inputOptions: {
    tucuman: "Tucumán",
    salta: "Salta",
    jujuy: "Jujuy",
    catamarca: "Catamarca",
    santiago: "Santiago del Estero"
},
imageUrl: "image/Logo2.png",
imageWidth: "200px",
imageAlt: "Logotipo A4",

})

if(provincia){
Swal.fire({
    title:`Seleccionaste ${provincia}`
})
}

})()