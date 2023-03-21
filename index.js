const menuToggle = document.getElementById('menu-toggle');
const overlayBtn = document.getElementById('overlay-toggle');
const overlayContainer = document.querySelector('.overlay-container');
function toggleOverlay(){
    overlayContainer.classList.toggle('overlay-active')
}

menuToggle.addEventListener('click',toggleOverlay);
overlayBtn.addEventListener('click',toggleOverlay)