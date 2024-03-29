//Dark Mode

const btnSwitch = document.querySelector("#switch");

    btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

//Guardar Dark Mode en localStorage

if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
}else {
    localStorage.setItem('dark-mode', 'false');
}
});

// Obtener el modo actual

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

// Scroll up Button

document.getElementById("button-up-up").addEventListener("click",scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) { 
        window.scrollTo (0, 0);
        
    }
}

buttonUp = document.getElementById("button-up-up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}


// Data Base de trabajadores
const API_URL = 'http://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');


fetch(`${API_URL}/users`)
.then((response) => response.json())
.then((users) => {
    users.forEach(user =>{
        let elem = document.createElement('li');
        elem.appendChild(
            document.createTextNode(`${user.name} \u2709 ${user.email}`));
        ul.appendChild(elem)
    });
    
    HTMLResponse.appendChild(ul);
});

// Carrito de compra de productos

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
}) 
cards.addEventListener('click', e =>{
    addCarrito(e)
})

items.addEventListener('click', e => {
    btnAccion(e)
})

// Leer JSON de productos
const fetchData = async() => {
    try {
        const res = await fetch("data.json")
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
}

// Recorrer elementos
const pintarCards = data => {
         data.forEach(producto => {
         templateCard.querySelector('h5').textContent = producto.title
         templateCard.querySelector('p').textContent = producto.precio
         templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
         templateCard.querySelector('.btn-dark').dataset.id = producto.id

         const clone = templateCard.cloneNode(true)
         fragment.appendChild(clone)
         })
         cards.appendChild(fragment)
}

// Evento boton comprar
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

// Agregar al carrito
const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

// Alerta de compra
    Swal.fire(
        producto.title,
        "Agregado al carrito de compras",
        );

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

// Guardado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0 ) {
        footer.innerHTML = `
        <th scope= "row" colspan="5">El Carrito de compras está vacío</th>`

        return
    }

// Sumar y restar cantidades de productos
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

// Vaciar Carrito
    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e => {
    if(e.target.classList.contains('btn-info')) {
        carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }

    if(e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }

    e.stopPropagation()
}