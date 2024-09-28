const menuicon = document.querySelector(".menu-bar");
const menulist = document.querySelector(".list-menu");

menuicon.addEventListener("click", ()=> {
    menuicon.classList.toggle("active");
    menulist.classList.toggle("active");
})