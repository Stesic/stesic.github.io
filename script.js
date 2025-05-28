const $toggleElement = document.querySelector("#menu-toggle");
const $accourdionLabels = document.querySelectorAll(".accordion-label");
const $accourdionIconWrap = document.querySelector(".accordion-icon-wrap");
const $accourdionPanels = document.querySelectorAll(".accourdion-panel");

const $main = document.querySelector(".main");
const $accourdionIcons = document.querySelectorAll(".accourdion-icon");

$main.addEventListener("click", () => {
  $toggleElement.checked = !$toggleElement;
});

for (let i = 0; i < $accourdionLabels.length; i++) {
  $accourdionLabels[i].addEventListener("click", function () {
    const $accourdionPanel = $accourdionPanels[i];
    const $accourdionIcon = $accourdionIcons[i];
    const panelStyle = $accourdionPanel.style.height;

    const panelOpen = !!panelStyle && panelStyle !== "0px";

    if (panelOpen) {
      $accourdionPanel.style.height = 0;
      $accourdionIcon.style.transform = "none";
    } else {
      $accourdionPanel.style.height = $accourdionPanel.scrollHeight + "px";
      $accourdionIcon.style.transform = "rotate(180deg)";
    }
  });
}

// MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//CAROUSEL

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
