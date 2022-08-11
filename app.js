// Sticky Header functionality

var header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Hamburger Menu functionality

var hamburger = document.querySelector(".hamburger");
var bars = document.querySelectorAll(".line");
var nav = document.querySelector("nav")
var navLinks = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", function() {

    nav.classList.toggle("open");

    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle("open");
    }

});


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        nav.classList.remove("open");
        for (let i = 0; i < bars.length; i++) {
            bars[i].classList.remove("open");
        }
    })
}


//carousal slider animation

var slides = document.querySelectorAll('.carousal-element');
var btns = document.querySelectorAll('.nav-dot');
let currentSlide = 1;

//manual navigation of slider
var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    })
})

//auto navigation of slider
var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            })
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();


//dynamic year for footer

let footerYear = document.getElementById("year");
let year = new Date().getFullYear();
footerYear.innerText = year;