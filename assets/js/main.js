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

let cssBar = document.querySelector('.css'),
    htmlBar = document.querySelector('.html'),
    jsBar = document.querySelector('.javascript'),
    jqBar = document.querySelector('.jquery'),
    resBar = document.querySelector('.responsive'),
    learnBar = document.querySelector('.learn');

// reveal skills section
window.sr = ScrollReveal();
sr.reveal('.skills', {
    duration: 1000,
    afterReveal: function(){
        htmlBar.style.width = "90%";
        cssBar.style.width = "90%";
        jsBar.style.width = "60%";
        jqBar.style.width = "50%";
        resBar.style.width = "80%";
        learnBar.style.width = "100%";
    }
});
sr.reveal('.tools');


const typedOptions = {
    strings: ["Web Developer", "Photographer", "Musician", "Teacher", "DIYer", "World Traveler"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity
};

const typed = new Typed("#changeWord", typedOptions);

// ====== CONTACT FORM =======

var config = {
    apiKey: "AIzaSyDAUN9UtwvBfzu0sSbH4AW_IBB1OjixRSA",
    authDomain: "portfolio-contact-3924b.firebaseapp.com",
    databaseURL: "https://portfolio-contact-3924b.firebaseio.com",
    projectId: "portfolio-contact-3924b",
    storageBucket: "portfolio-contact-3924b.appspot.com",
    messagingSenderId: "227932436675"
  };
  firebase.initializeApp(config);


  // Reference message collection

  var messagesRef = firebase.database().ref('messages');

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(userName, userEmail, userMessage) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: userName,
        email:  userEmail,
        message: userMessage
    })
}

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    // Prevents default attempt of submitting form to current page
    e.preventDefault();
    //get values
    let userName = getInputVal('userName'),
        userEmail = getInputVal('userEmail'),
        userMessage = getInputVal('userMessage');
    
    //save message
    saveMessage(userName, userEmail, userMessage);

    // show sent alert
    document.querySelector('.alert').style.display = "block";

    //hide alert after 3 s.
    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    //clear inputs
    document.getElementById('contactForm').reset();
}

