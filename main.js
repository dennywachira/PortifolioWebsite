//sticky Navbar

let header = document.querySelector('header');
let menu= document.querySelector('#menu-icon');
let nav= document.querySelector('.navbar');

window.addEventListener('scroll',() =>{
    header.classList.toggle('shadow',window.scrollY >0);
});
//show menu after clicking the menu-icon
menu.onclick = () =>{
    nav.classList.toggle('active');
}
//hide menu on scroll
window.onscroll = () =>{
nav.classList.remove('active');
}

//dark mode
let darkmode = document.querySelector('#darkmode')

darkmode.onclick= () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon',"bx-sun");
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun',"bx-moon");
        document.body.classList.remove('active');
    }
    

}