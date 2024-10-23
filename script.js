const menu =document.querySelector(".Sidebar_Menu")
const open_btn =document.querySelector("#Open_Menu")
const close_btn =document.querySelector("#Close_Menu")



open_btn.addEventListener('click',function(){
    menu.classList.add('active')
})


close_btn.addEventListener('click',function(){
    menu.classList.remove('active')
})


const number =document.querySelectorAll('.count')

let interval=2000;

number.forEach((value) => {
    let start=0;
    let end = parseInt(value.getAttribute('data-count'));
    let duration =Math.floor( interval / end);
    let counter =setInterval(function(){
        start +=1;
        value.textContent =start;
            if(start == end){
                clearInterval(counter);
            }
    },duration)
});

const Navbar =document.querySelector('.Navbar');

window.addEventListener('scroll',function(){
    var scroll = window.scrollY;
    if(scroll>60){
        Navbar.classList.add('sticky');
    }
    else{
        Navbar.classList.remove('sticky');
    }
})

const Hero =document.querySelector('.Hero');

window.addEventListener('scroll', function(){
    var scroll =window.scrollY;
    if(scroll> 80){
        Hero.classList.add('Hero_Sticky');
    }
    else{
        Hero.classList.remove('Hero_Sticky');
    }
})

var swiper = new Swiper('.mySwiper',{
    loop:true,
    autoplay:true,
})