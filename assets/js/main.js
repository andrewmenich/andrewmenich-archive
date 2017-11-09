window.onload = function() {
    const firstAnimate = document.querySelector(".st0");
    const logoAnimate = document.querySelector(".st1");
    const logoSlide = document.querySelector(".logo-svg")
    const logoLetters = document.querySelector("#logo_name");

    firstAnimate.addEventListener('animationend', function(){
        logoSlide.style.WebkitTransform = "none";    
    });

    logoAnimate.addEventListener('animationend', function(){
        logoLetters.classList.remove("hidden");
        logoLetters.classList.add("logo-name");        
    });
}