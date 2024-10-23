// Put your applicaiton javascript here
'use strict';
/**Modal toggle */

//Open close modal
function openModal() {
  document.getElementById('myModal').style.display = 'flex';
}

// function openCart() {
//   document.getElementById('myModal2').style.display = 'flex';
// }

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
const headerActions = document.getElementById('headerActions')
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





// document.addEventListener('DOMContentLoaded', function(){
//   const text1 = document.getElementById('text1');
//   const text2 = document.getElementById('text2');
//   const text3 = document.getElementById('text3');

//   const texts = [text1, text2, text3];
//   let currentIndex = 0;

//   // Apply CSS styles for smoother transitions
//   texts.forEach(text => {
//     text.style.position = 'absolute';
//     text.style.transition = 'left 0.5s ease-in-out';
//   });

//   function slideToMiddle(element){
//     element.style.left = '40%';
//   }

//   function resetPosition(element){
//     element.style.left = '-100%';
//   }

//   function slideText(){
//     resetPosition(texts[currentIndex]);
//     currentIndex = (currentIndex + 1) % texts.length;
//     slideToMiddle(texts[currentIndex]);
//   }

//   // Initially, display the first element in the middle
//   slideToMiddle(texts[currentIndex]);

//   // Change text every 3 seconds
//   setInterval(slideText, 3000);
// });






// async function updateCartUI(cartData) {
//   try {
//     // Assuming you have elements in your side cart with specific IDs or classes
//     let cartItemElements = document.querySelectorAll('.cart-item');
//     let cartSubtotalElement = document.getElementById('cart-subtotal');
    
//     // Loop through the cart items to update or fetch additional data if needed
//     for (let [index, item] of cartData.items.entries()) {
//       let itemElement = cartItemElements[index];

//       if (itemElement) {
//         // Update the existing item in the cart
//         itemElement.querySelector('.cart-item-title').textContent = item.product_title;
//         itemElement.querySelector('.cart-item-variant').textContent = item.variant_title;
//         itemElement.querySelector('.cart-item-quantity').textContent = `Quantity: ${item.quantity}`;
//         itemElement.querySelector('.cart-item-price').textContent = `${(item.price / 100).toFixed(2)} ${cartData.currency}`;
        
//         // Async fetch additional data if necessary (e.g., fetching an image)
//         let imageUrl = await fetchImageUrl(item);
//         itemElement.querySelector('.cart-item-image').src = imageUrl;
//         itemElement.querySelector('.cart-item-image').alt = item.title;
//       } else {
//         // Optionally handle adding new items asynchronously
//         await addNewCartItem(item);
//       }
//     }

//     // Update the subtotal
//     if (cartSubtotalElement) {
//       cartSubtotalElement.textContent = `Subtotal: ${(cartData.total_price / 100).toFixed(2)} ${cartData.currency}`;
//     }
//   } catch (error) {
//     console.error('Error updating cart UI:', error);
//   }
// }





document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById('loader');
  var cartContent = document.getElementById('cart-content');

  // Show the loader
  loader.style.display = 'block';

  // Simulate data fetching (you can replace this with actual data fetching logic)
  setTimeout(function() {
    // Hide the loader
    loader.style.display = 'none';

    // Show the cart content
    cartContent.style.display = 'block';
  }, 1000); // Adjust the time according to your data fetching process
});













      function fetchCart() {
        fetch('/cart.js')
          .then(response => response.json())
          .then(cart => {
            updateCartUI(cart);
          })
          .catch(error => console.error('Error-fetching cart:', error));
      }

     function getCurrencySymbol(currencyCode){
      return (0).toLocaleString(undefined, {
          style: "currency",
          currency: currencyCode,
          minimumFractionDigits:0,
          maximumFractionDigits:0,
       }).replace(/\d/g, '').trim();
    }
      

      const currencySymbol = "{{ shop.currency | escape }}"; 
      {% comment %} const currency_code = getCurrencySymbol(currencySymbol)  {% endcomment %}
      const currency_code = getCurrencySymbol(window.Shopify.currency.active)
      {% comment %} function getCurrencySymbol(currencyCode) {
        return (0).toLocaleString(undefined, {
          style: "currency",
          currency: currencyCode,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).replace(/\d/g, '').trim();
      }
    
      // Function to update currency symbol when the currency changes
      function updateCurrencySymbol() {
        // Get the current currency from Shopify
        const currencyCode = window.Shopify.currency.active || "{{ shop.currency.iso_code }}";
        
        // Update the symbol
        const currencySymbol = getCurrencySymbol(currencyCode);
    
        // Now, do something with the updated symbol, like updating the UI
        document.querySelector('#currency-symbol').innerText = currencySymbol;
      }
    
      // Run on page load
      document.addEventListener("DOMContentLoaded", function() {
        updateCurrencySymbol();
      });
    
      // Shopify typically triggers a 'currency:changed' event when the currency changes
      document.addEventListener("currency:changed", function(event) {
        updateCurrencySymbol();
      }); {% endcomment %}
      function updateCartUI(cart) {
        var cartContent = document.getElementById('cart-content');
        cartContent.innerHTML = ''; // Clear existing content
        
        if (cart.item_count > 0) {
          var cartHTML = `
          <div style="display: flex; flex-direction: column;">
            <h1>Cart</h1>
            <form action="/cart" method="post" novalidate>`;
          let subtotal = 0;
          cart.items.forEach(function(item, index) {
            const itemPrice = item.price / 100;  // Convert cents to dollars
            const initialTotalPrice = itemPrice * item.quantity;
            subtotal += initialTotalPrice;
            const safeItemId = `item_${item.key.replace(/[^a-zA-Z0-9_-]/g, '')}`;

            cartHTML += `
                        <div style="display:flex; padding:20px; margin-bottom:1rem;"  id="${safeItemId}">
                            <div style="flex:1; display:flex; align-items:center; justify-content:center;">
                               <a href="${item.url}">
                                 <img src="${item.image}" alt="${item.title}" class="img-cover" width="480" height="640" loading="lazy">
                               </a>
                            </div>
                            <div style="flex:1; display:flex;  flex-direction:column;" >
                                <div style="flex:1; display:flex; justify-content:space-between">
                                  <a href="${item.url}" style="font-size:1.5rem;">${item.product_title}</a>
                                    {% comment %} ${currency_code}${item.price.toFixed(2)} {% endcomment %}
                                  <a href="#" class="remove-item" data-line="${index + 1}" data-key="${item.key}" style="color: black;"><ion-icon name="close-circle-outline"></ion-icon></a>
                                </div>
                                {% comment %} <td id="price_${item.key}">
                                  ${currency_code}${initialTotalPrice.toFixed(2)}
                                </td>  {% endcomment %}
                                <div>
                                    <p style="font-size:1.5rem;">${currency_code}${itemPrice.toFixed(2)}</p>
                                    <p id="line_price_${item.key}" style="font-size:1.5rem;">Total:  ${currency_code}${initialTotalPrice.toFixed(2)}</p>
                                </div> 
                                <td style="display:flex; align-items:center; justify-content:center">
                                  <input style="display:none;" type="number" name="updates[]" id="updates_${item.key}" value="${item.quantity}" min="0">
                                </td>
                              <td>
                                {% if item.original_line_price != item.line_price %}{{ item.original_line_price | money }}{% endif %}
                                {{ item.line_price | money }}
                                {% for discount in item.discounts %}{{ discount.title }}{% endfor %}
                            </td>
                            <div class="quantity-selector">
                              <button type="button" class="decrement" id="decrement_${item.key}">-</button>
                              <span id="quantity_${item.key}">${item.quantity}</span>
                              <button type="button" class="increment" id="increment_${item.key}">+</button>
                            </div> 
                            </div>
                      </div>
            `;
          });
      
          cartHTML += `
            <div>
              <p id="subtotal">Subtotal: ${currency_code}${subtotal.toFixed(2)}</p>
              <button type="submit" name="update">Update</button>
              <button type="submit" name="checkout" class="btn btn-primary">Checkout</button>
              {% comment %} <p>Sub total: ${Shopify.formatMoney(cart.total_price)}</p> {% endcomment %}
            </div>
          </form>
        </div>`; 

        cartContent.innerHTML = cartHTML;

      // Add event listeners for increment and decrement buttons
      cart.items.forEach(function(item, index) {
        const decrementButton = document.getElementById(`decrement_${item.key}`);
        const incrementButton = document.getElementById(`increment_${item.key}`);
        const quantityDisplay = document.getElementById(`quantity_${item.key}`);
        const quantityInput = document.getElementById(`updates_${item.key}`);
        const linePriceDisplay = document.getElementById(`line_price_${item.key}`);
        const subtotalDisplay = document.getElementById('subtotal');
        const safeItemId = `item_${item.key.replace(/[^a-zA-Z0-9_-]/g, '')}`;



        function updatePriceAndQuantity(newQuantity) {
          const newLinePrice = (item.price * newQuantity) / 100;
          quantityDisplay.textContent = newQuantity;
          quantityInput.value = newQuantity;
          linePriceDisplay.textContent = `Total: ${currency_code}${newLinePrice.toFixed(2)}`;

          // Update the subtotal
          subtotal = subtotal - (item.price * item.quantity) / 100 + newLinePrice;
          subtotalDisplay.textContent = `Subtotal: ${currency_code}${subtotal.toFixed(2)}`;

          // Update item quantity to the new quantity
          item.quantity = newQuantity;
        }

        decrementButton.addEventListener('click', function() {
          let currentQuantity = parseInt(quantityInput.value, 10);
          if (currentQuantity > 1) {
            currentQuantity--;
            updatePriceAndQuantity(currentQuantity);
          }
        });

        incrementButton.addEventListener('click', function() {
          let currentQuantity = parseInt(quantityInput.value, 10);
          currentQuantity++;
          updatePriceAndQuantity(currentQuantity);
        });



    //REMOVING
        const removeButton = document.querySelector(`.remove-item[data-key="${item.key}"]`);
        
        removeButton.addEventListener('click', function(e) {
          e.preventDefault();
          removeCartItem(safeItemId, index +1);
        });
      });
          {% comment %} cartContent.innerHTML = cartHTML; {% endcomment %}
        } else {
          cartContent.innerHTML = '<h2>Cart</h2><p>Cart is empty</p>';
        }


        function removeCartItem(safeItemId, line) {
          
            console.log(`Attempting to remove item with ID: ${safeItemId}`);
            const itemElement = document.getElementById(safeItemId);
            if (itemElement) {
              fetch(`/cart/change.js`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                  line: line,
                  quantity: 0
                })
              })
              .then(response => response.json())
              .then(updatedCart => {
                itemElement.remove();
                updateSubtotal(updatedCart);
              })
              .catch(error => {
                console.error('Error removing item from cart:', error);
              });
            } else {
              console.error(`Element with ID ${safeItemId} not found.`);
            }
        
        }
      
      
        
        

        
        // Function to update the subtotal
        function updateSubtotal(updatedCart) {
          let subtotal = 0;
          updatedCart.items.forEach(item => {
            subtotal += (item.price * item.quantity) / 100;
          });
          document.getElementById('subtotal').textContent = `Subtotal: ${currencySymbol}${subtotal.toFixed(2)}`;
        }
      }
      

      






      function submitAddToCartForm(formElement) {
        let formData = new FormData(formElement);
        var myModal2 = document.getElementById('myModal2');
        var loader = myModal2.querySelector('#loader');
        var cartContent = myModal2.querySelector('#cart-content');
      
        // Show the modal
        myModal2.style.display = 'block';
      
        // Show the loader and hide the cart content initially
        loader.style.display = 'block';
        cartContent.style.display = 'none';
      
        // Simulate data fetching (or actual AJAX request)
      // Adjust this timeout based on actual data fetching time
      
        fetch(window.Shopify.routes.root + 'cart/add.js', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {     
          openCart(); 
          fetchCart();
          setTimeout(function() {
            // Hide the loader and show the cart content
            loader.style.display = 'none';
            cartContent.style.display = 'block';
          }, 100); 
    
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      
        return false; // Prevent the default form submission
      }
  

