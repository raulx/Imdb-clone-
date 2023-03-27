const menuToggle = document.getElementById('menu-toggle');
const overlayBtn = document.getElementById('overlay-toggle');
const overlayContainer = document.querySelector('.overlay-container');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchLabel = document.getElementById('search-label');
const searchOption = document.getElementById('search-option-overlay')
const searchOptionPara = document.querySelectorAll('.keywords');
const labelText = document.querySelector('.label-text');
const caret = document.querySelector('.caret');
const firstOption = document.getElementById('first-option');


firstOption.firstElementChild.style.color = 'yellow';
firstOption.classList.add('active');

function toggleOverlay(){
    overlayContainer.classList.toggle('overlay-active')
}



searchInput.addEventListener('focus',function(){
    searchBar.classList.add('focus')
})
searchInput.addEventListener('blur',function(){
    searchBar.classList.remove('focus')
})

searchLabel.addEventListener('click',function(){
    searchOption.classList.toggle('show-option-overlay');
    caret.classList.toggle('caret-rotate')


})
menuToggle.addEventListener('click',toggleOverlay);
overlayBtn.addEventListener('click',toggleOverlay);

searchOptionPara.forEach((item)=>{
    item.addEventListener('click',(event)=>{
        searchOptionPara.forEach((i)=>{
            i.firstElementChild.style.color = 'gray'
            i.classList.remove('active')
        })
        item.firstElementChild.style.color = 'yellow';
        item.classList.add('active')
        searchOption.classList.remove('show-option-overlay')
        labelText.innerText = item.children[1].innerText
    })
    
})