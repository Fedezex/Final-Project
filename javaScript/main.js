//Dark Mode

const btnSwitch = document.querySelector("#switch");

    btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

// Scroll up

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


// API Fetch
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

// Carrito de contratación de servicios

const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
}) 
items.addEventListener('click', e =>{
    addCarrito(e)
})

const fetchData = async() => {
    try {
        const res = await fetch("data.json")
        const data = await res.json()
        pintarCards(data)
//      console.log(data);  
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = data => {
         data.forEach(producto => {
         templateCard.querySelector('h5').textContent = producto.title
         templateCard.querySelector('p').textContent = producto.precio
         templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
         templateCard.querySelector('.btn-dark').dataset.id = producto.id

         const clone = templateCard.cloneNode(true)
         fragment.appendChild(clone)
         })
         items.appendChild(fragment)
}

const addCarrito = e => {
    //console.log(e.target);
    //console.log(e.target.classList.contains('btn-dark'));
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    console.log(objeto);
}