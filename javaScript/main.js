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


