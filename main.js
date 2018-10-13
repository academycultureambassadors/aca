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
