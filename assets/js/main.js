window.onload = function() {
    let firstAnimate = document.querySelector('.st0');
    let logoAnimate = document.querySelector('.st1');
    let logoSlide = document.querySelector('.logo-svg')
    let logoLetters = document.querySelector('#logo_name');

    firstAnimate.addEventListener('animationend', function(){
        logoSlide.style.WebkitTransform = 'none';    
    });

    logoAnimate.addEventListener('animationend', function(){
        logoLetters.classList.remove('hidden');
        logoLetters.classList.add('logo-name');        
    });
}

let slide = document.querySelectorAll('.sample'),
    leftArrow = document.querySelector('#slide-left'),
    rightArrow = document.querySelector('#slide-right'),
    current = 0;

// clear all slides
function reset() {
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

// initialize slider
function startSlide(){
    reset();
    slide[0].style.display = 'flex';
}

// Show Previous
function slideLeft(){
    reset();
    slide[current - 1].style.display = 'flex';
    current--;
}

// Show Next
function slideRight(){
    reset();
    slide[current + 1].style.display = 'flex';
    current++;
}

// left button functionality
leftArrow.addEventListener('click', function(){
    if(current === 0){
        current = slide.length;
    }
    slideLeft();
});

// right button functionality
rightArrow.addEventListener('click', function(){
    if(current === slide.length - 1){
        current = -1
    }
    slideRight();
});

startSlide();

window.onload = function() {
    let firstAnimate = document.querySelector('.st0');
    let logoAnimate = document.querySelector('.st1');
    let logoSlide = document.querySelector('.logo-svg')
    let logoLetters = document.querySelector('#logo_name');

    firstAnimate.addEventListener('animationend', function(){
        logoSlide.style.WebkitTransform = 'none';    
    });

    logoAnimate.addEventListener('animationend', function(){
        logoLetters.classList.remove('hidden');
        logoLetters.classList.add('logo-name');        
    });
}

