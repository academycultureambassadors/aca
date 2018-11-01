headerBlocks = document.querySelectorAll(".decor span");

headerBlocks.forEach(block => {
  block.style.transitionDelay = Math.abs(Math.random() - 0.5) + "s";
});

function animateHeaderBlocks() {
  headerBlocks.forEach(block => {
    block.style.opacity = Math.random() + 0.1;
    console.log("block");
  });
}

headerAnimation = setInterval(animateHeaderBlocks, 1500);

//OVERLAYS

var overlays = document.querySelectorAll(".overlay");
var closeLinks = document.querySelectorAll(".close");
var openLinks = document.querySelectorAll(".open-overlay");
var bodyElement = document.querySelector("body");

closeLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    overlays.forEach(overlay => {
      overlay.classList.remove("open");
    });
    bodyElement.style.overflowY = "auto";
  });
});

openLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(link.getAttribute("opens")).classList.add("open");
    bodyElement.style.overflowY = "hidden";
  });
});
