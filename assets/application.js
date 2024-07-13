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

/**cartbar- toggle */

// const cartTogglers = document.querySelectorAll("[data-cart-toggler]");
// const cartbar = document.querySelector("[data-cartbar]");
// const cartbarLinks =document.querySelectorAll("data-cart-link")
// const cartoverlay = document.querySelector("[cartoverlay]")

// const toggleCartbar = function(){
//   cartbar.classList.toggle('active');
//   cartoverlay.classList.toggle('active');
// }

// addEventOnElem(cartTogglers, "click", toggleCartbar)


// const closeCartbar = function(){
//   cartbar.classList.remove('active')
//   cartoverlay.classList.remove('active')
// }

// addEventOnElem(cartbarLinks, "click", closeCartbar)


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