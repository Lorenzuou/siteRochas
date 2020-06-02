window.onscroll = function() { myFunction() };


var navbar = document.getElementById("navbar");
//var navcolap = document.getElementById("navbarResponsive");

var sticky = navbar.offsetTop;

var img1 = document.getElementById("brand");
var anima = 0;



function myFunction() {
    console.log(window.screen.width);

    if (window.pageYOffset >= sticky + 10 && window.screen.width > 800) {
        navbar.classList.add("sticky");
        navbar.classList.add("navbar-muda")
        img1.style.width = "40";



        document.getElementById("logo").classList.add("navbar-brand-wow");


    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("navbar-muda")
        document.getElementById("logo").classList.remove("navbar-brand-wow");
        img1.style.width = "80";

    }

}