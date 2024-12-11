const zilapoga = document.querySelector('.zilapoga')
const rozapoga = document.querySelector('.rozapoga')
const melnapoga = document.querySelector('.melnapoga')
const dzeltenapoga = document.querySelector('.dzeltenapoga')

let initialMainColor = localStorage.maincolor || '#04436e'; //obligati sakuma krasa
document.documentElement.style.setProperty("--maincolor", initialMainColor)

console.log(zilapoga)

zilapoga.addEventListener("click", function() {
    document.documentElement.style.setProperty('--maincolor' , '#04436e');
    localStorage.maincolor = "#04436e"
    console.log("Poga tika nospiesta")
    document.documentElement.style.setProperty('--maincolor2' , '#1d567a');
    localStorage.maincolor2 = "#1d567a"
})

rozapoga.addEventListener("click", function() {
    document.documentElement.style.setProperty('--maincolor' , '#902094');
    localStorage.maincolor = "#902094"
    console.log("Poga tika nospiesta")
    document.documentElement.style.setProperty('--maincolor2' , '#e372e7');
    localStorage.maincolor2 = "#e372e7"
})

melnapoga.addEventListener("click", function() {
    document.documentElement.style.setProperty('--maincolor' , '#1b1b1b');
    localStorage.maincolor = "#1b1b1b"
    console.log("Poga tika nospiesta")
    document.documentElement.style.setProperty('--maincolor2' , '#575656');
    localStorage.maincolor2 = "#575656"
})

dzeltenapoga.addEventListener("click", function() {
    document.documentElement.style.setProperty('--maincolor' , '#cabe11');
    localStorage.maincolor = "#cabe11"
    console.log("Poga tika nospiesta")
    document.documentElement.style.setProperty('--maincolor2' , '#d7cd40');
    localStorage.maincolor2 = "#d7cd40"
})



// pogas definesana
let mybutton = document.getElementById("myBtn");

// kad noskrulle 400px uz leju paradas poga
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// kad uzspiez uz pogu iet uz augsu
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let slideIndex = 1;
showSlides(slideIndex);


//mainas pats ik pec 5 sek
setInterval(function(){
        plusSlides(1)
    }, 5000)

// uz prieksu atpakal
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
