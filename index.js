const menuToggle = document.getElementById('menu-toggle');
const overlayBtn = document.getElementById('overlay-toggle');
const overlayContainer = document.querySelector('.overlay-container');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('focus',function(){
    searchBar.classList.add('focus')
})
searchInput.addEventListener('blur',function(){
    searchBar.classList.remove('focus')
})
function toggleOverlay(){
    overlayContainer.classList.toggle('overlay-active')
}

menuToggle.addEventListener('click',toggleOverlay);
overlayBtn.addEventListener('click',toggleOverlay)