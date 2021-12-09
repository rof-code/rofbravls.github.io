var menu1 = document.querySelector('.open_menu');
var links = document.querySelectorAll('.menu-link');
var side = document.querySelector('.sidebar-nav');
var exit = document.querySelector('.fa-times');
menu1.addEventListener("click", () => {
    links.forEach((e) => {
        e.classList.toggle("active_li");
        if(e.classList.contains("active_li")){
            side.classList.add("active_nav");
            exit.classList.add("active_btn");
        }else{
            side.classList.remove("active_nav");
            exit.classList.remove("active_btn");
        }
        exit.addEventListener("click", () => {
            e.classList.toggle("active_li");
            side.classList.remove("active_nav");
            exit.classList.remove("active_btn");
        })
        side.addEventListener("click", () => {
            e.classList.toggle("active_li");
            side.classList.remove("active_nav");
            exit.classList.remove("active_btn");
        })
    })
})