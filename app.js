const hanburger = document.querySelector(".header .nav-bar .nav-list .hanburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");

hanburger.addEventListener('click', () => {
    hanburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
}
) 

document.addEventListener("scroll",()=>{
    var  scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor  = "rgba(29, 28, 28, 0.932)"
    }
    else {
        header.style.backgroundColor  = "rgba(29, 28, 28, 0.932)"
    }
})
menu_item.forEach((item) =>{
    item.addEventListener("click",()=>{
        hanburger.classList.toggle('active');
        mobile_menu.classList.toggle('active'); 
    })
})