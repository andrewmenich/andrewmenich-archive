// ======= MAIN LOGO ANIMATION =======
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

// ====== ABOUT ME BUTTON =======

function buttonClick(ids){
    return document.getElementById(ids).addEventListener('click', function(){
        document.querySelector('.contact').scrollIntoView({ 
            behavior: 'smooth' 
        });
    })
}

buttonClick('headerBtn');
buttonClick('contactBtn');

// ===== Reveal on Scroll settings ======

// reveal skills section
// window.sr = ScrollReveal();
// sr.reveal('.sample-work', {
//     duration: 1000
// });
// sr.reveal('.about-me', {
//     duration: 1000
// });
// sr.reveal('.skills-section', {
//     duration: 1000
// });
// sr.reveal('.contact', {
//     duration: 1000
// });

// ====== TYPED.JS SETTINGS =======

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

function checkValidity() {
    if (userName.value === "" || userEmail.value === "" || userMessage.value === "") {
        document.querySelector('.warning').style.display = "block";

        setTimeout(function(){
            document.querySelector('.warning').style.display = "none";
        }, 5000);

        return false;
    }
}

function submitForm(e){
    // Prevents default attempt of submitting form to current page
    e.preventDefault();

    checkValidity();

    if(checkValidity() === false){
        return;
    }


    // get values
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
    }, 5000);

    //clear inputs
    document.getElementById('contactForm').reset();
}


// ========== FLICKITY SLIDER ==========
var workSlider = document.getElementById('slider');
var flkty = new Flickity( workSlider, {
  cellAlign: 'left',
  contain: true,
  percentPosition: false,
  freeScroll: false,
  wrapAround: true,
  bgLazyLoad: true,
  adaptiveHeight: true,
  dragThreshold: 12
});

var slide1 = document.getElementById('cleganeBowl');

flkty.on( 'staticClick', function(event, pointer, cellElement, cellIndex ) {
    if ( !cellElement ) {
        return;
    }else if(event.target.classList.contains('work-link')){
        return;
    }
    var workFilter = document.getElementsByClassName('bg-filter');
    var infoBoxes = document.getElementsByClassName('work-info');
    for(var i = 0; i < infoBoxes.length; i++){
        infoBoxes[i].classList.toggle('hide'); 
        workFilter[i].classList.toggle('filter-on'); 
    }
  });

// ======== FB Analytics Logger =========

document.getElementById('sourceLink').addEventListener('click', function(){
        FB.AppEvents.logEvent("Source Code Viewed");
    })
document.getElementById('resumeBtn').addEventListener('click', function(){
        FB.AppEvents.logEvent("Resume Viewed");
    })