// Put your applicaiton javascript here
'use strict';
/**Modal toggle */

//Open close modal
function openModal() {
  document.getElementById('myModal').style.display = 'flex';
}

function openCart() {
  document.getElementById('myModal2').style.display = 'flex';
}

function toggleForm(formToShow){
const login=document.getElementById('login')
const register=document.getElementById('register')



if(formToShow === 'register'){
  login.classList.add('hidden')
  register.classList.remove('hidden')
}else {
  login.classList.remove('hidden')
  register.classList.add('hidden')
}
}


// Function to close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}


// Function to close the cart
function closeCartbar() {
  document.getElementById('myModal2').style.display = 'none';
}

// Close the modal if the overlay (background) is clicked
window.onclick = function(event) {
  if (event.target === document.getElementById('myModal')) {
      closeModal();
  }
};







/**add event on element */


const addEventOnElem = function (elem, type, callback) {
  if (!elem) {
    return;
  }
  
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] && typeof elem[i].addEventListener === 'function') {
        elem[i].addEventListener(type, callback);
      } else {
        console.error('Element is not valid or does not support addEventListener:', elem[i]);
      }
    }
  } else {
    if (typeof elem.addEventListener === 'function') {
      elem.addEventListener(type, callback);
    } else {
      console.error('Element is not valid or does not support addEventListener:', elem);
    }
  }
}

/**navbar- toggle */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks =document.querySelectorAll("data-nav-link")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = function(){
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
}

addEventOnElem(navTogglers, "click", toggleNavbar)


const closeNavbar = function(){
   navbar.classList.remove('active')
   overlay.classList.remove('active')
}

addEventOnElem(navbarLinks, "click", closeNavbar)


/**
 * header-sticky
 */

const header = document.querySelector("[data-header]")
const backTopBtn = document.querySelector("[data-back-top-btn]")
const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive)

let lastScrolledPos = 0;

const headerSticky = function() {
    if(lastScrolledPos >= window.scrollY){
        header.classList.remove("header-hide")
    }else {
        header.classList.add("header-hide")
    }
    lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky)



/**scroll reveal effect */

const sections = document.querySelectorAll("[data-section]")

const scrollReveal = function(){
  for (let i = 0; i < sections.length; i++) {
    if(sections[i].getBoundingClientRect().top < window.innerHeight/2){
      sections[i].classList.add("active")
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal)





document.addEventListener('DOMContentLoaded', function(){
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');

  const texts = [text1, text2, text3];
  let currentIndex = 0;

  function setClasses(element, classes) {
    element.className = `text ${classes}`;
  }

  function slideText() {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % texts.length;

    setClasses(texts[previousIndex], 'exit'); // Slide out the previous text
    setClasses(texts[currentIndex], 'enter'); // Prepare the next text to slide in

    // After a brief delay, move the next text to the middle
    setTimeout(() => {
      setClasses(texts[currentIndex], 'middle');
    }, 20); // 20ms to ensure the browser registers the change
  }

  // Initially, set the first text to be in the middle
  setClasses(texts[currentIndex], 'middle');

  // Change text every 3 seconds
  setInterval(slideText, 3000);
});

