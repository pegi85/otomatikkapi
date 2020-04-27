// changing header size when scrolling . header and navigation fixed top when scrolling//
window.onscroll = function () {

  scrollUpButton();
};

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