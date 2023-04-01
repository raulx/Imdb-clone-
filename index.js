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
const languageDiv = document.getElementById('language-div')
const languageOverlay = document.getElementById('language-overlay');
const defaultLanguage = document.getElementById('selected-language');
var radioButtons = document.querySelectorAll('input[type="radio"]');


defaultLanguage.checked = true;
firstOption.firstElementChild.style.color = 'rgb(230,185,30)';
firstOption.classList.add('active');

function toggleOverlay(){
    overlayContainer.classList.toggle('overlay-active')
}


radioButtons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const selectedLanguage = e.target
        radioButtons.forEach((rbtn)=>{
            rbtn.checked = false;
        })
        selectedLanguage.checked = true;
        languageOverlay.classList.remove('show-language-overlay')
        defaultLanguage.innerText = selectedLanguage.lang

    })
})
searchInput.addEventListener('focus',function(){
    searchBar.classList.add('focus')
})
searchInput.addEventListener('blur',function(){
    searchBar.classList.remove('focus')
})

searchLabel.addEventListener('click',function(){
    searchOption.classList.toggle('show-option-overlay');
    caret.classList.toggle('caret-rotate');


})

document.addEventListener('mouseover',(e)=>{
    if(!(searchLabel.contains(e.target) || searchOption.contains(e.target))){
        searchOption.classList.remove('show-option-overlay');
        caret.classList.remove('caret-rotate');
    }
})
document.addEventListener('mouseover',(e)=>{
    if(!(languageDiv.contains(e.target) || languageOverlay.contains(e.target))){
        languageDiv.classList.remove('dotted-border')
        languageOverlay.classList.remove('show-language-overlay')
    }
})
menuToggle.addEventListener('click',toggleOverlay);
overlayBtn.addEventListener('click',toggleOverlay);

searchOptionPara.forEach((item)=>{
    item.addEventListener('click',()=>{
        searchOptionPara.forEach((i)=>{
            i.firstElementChild.style.color = 'gray'
            i.classList.remove('active')
        })
        item.firstElementChild.style.color = 'rgb(230,185,30)';
        item.classList.add('active')
        searchOption.classList.remove('show-option-overlay')
        labelText.innerText = item.children[1].innerText
    })
    item.addEventListener('mouseover',()=>{
        if(!item.classList.contains('active')){
            item.firstElementChild.style.color = '#fff';
        }

    })
    item.addEventListener('mouseout',()=>{
        if(!item.classList.contains('active')){
            item.firstElementChild.style.color = 'gray';
        }
    })
    
})

languageDiv.addEventListener('click',function(){
    languageDiv.classList.add('dotted-border')
    languageOverlay.classList.add('show-language-overlay')
})

