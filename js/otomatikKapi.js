// slide pics//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// changing header size when scrolling . header and navigation fixed top when scrolling//
window.onscroll = function () {
  scrollforchange();
  scrollUpButton();
};

function scrollforchange() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById("logoSmall").style.width = "37%";

  } else {

    document.getElementById("logoSmall").style.width = "60%";

  }
}
//Get the button
var mybutton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button

function scrollUpButton() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  var x = document.getElementById("navi");
  if (x.className === "navbar") {
    x.className = "navbar";
  } else {
    x.className += " responsive";
  }
}