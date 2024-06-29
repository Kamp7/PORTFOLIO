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
let heading=document.querySelector(".heading");
let drop=document.querySelectorAll(".drop");
let open=document.querySelectorAll(".open");
let skill=document.querySelector("#skill");
let education=document.querySelector("#education");
let hobbies=document.querySelector("#hobbies");
let category=document.querySelectorAll(".category");
drop.forEach((ele,i)=>{
    ele.addEventListener('click',()=>{
        console.log(ele,i);
        ele.style.display="none";
        heading.classList.add("activate");
        open[i].style.display="block";
        setTimeout(() => {
            heading.style.display="none";
            if(i==0)
                {
                 skill.style.display="block";
                 category[i].style.background="#B66D00";
                }
                else if(i==1)
                    {
                        education.style.display="block";
                        category[i].style.background="#B66D00";
                    }
                    else if(i==2)
                        {
                            hobbies.style.display="block";
                            category[i].style.background="#B66D00";
                        }
        }, 600);
       
    });
    
});