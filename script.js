let menu=document.querySelector("#menu");
let navIcon=document.querySelector(".nav-icon");
let navBar=document.querySelector(".navbar");
let nav=document.querySelector

menu.addEventListener('click',()=>{
navIcon.style.display="none";
navBar.style.display="block";
navBar.firstElementChild.style.display="flex";
navBar.classList.add('active');
});