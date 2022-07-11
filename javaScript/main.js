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



// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if(this.readyState == 4 && this.status == 200){
//         const data = JSON.parse(this.response);
//         const HTMLResponse = document.querySelector('#app');
//         const tpl = data.map((user) => `<li>${user.name} ${user.email}</li>`);
//         HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
//     }
// }
// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET",`${API_URL}/users`);
// xhr.send();
