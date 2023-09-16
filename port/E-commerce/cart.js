

var cart = [];

function addtocart(product) {

  cart.push(product);
  saveCartToLocalStorage();
  
  displaycart();
}

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    cart = JSON.parse(cartData);
  }
}

function clearCart() {
  cart = [];
  saveCartToLocalStorage();
  displaycart();
}

function delElement(index) {

  cart.splice(index, 1);
  saveCartToLocalStorage();
  
  displaycart();
}

function displaycart() {
  const cartItemElement = document.getElementById("cartItem");
  const totalElement = document.getElementById("total");

  if (cart.length === 0) {
    cartItemElement.innerHTML = "Your cart is empty";
    totalElement.textContent = "₹ 0.00";
  } else {
    // Display the products in the cart
    let cartContent = "";
    let totalPrice = 0;

    cart.forEach((item) => {
      cartContent += `<div class='cart-item'>
        <div class='row-img'>
          <img class='rowimg' src=${item.imageSrc} alt=${item.title}>
        </div>
        <p style='font-size: 12px;'>${item.title}</p>
        <h2 style='font-size: 15px'>${item.price}</h2>
        <i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i>
      </div>`;
      totalPrice += parseInt(item.price.slice(1).replace(",", ""));
    });

    cartItemElement.innerHTML = cartContent;

    // Display the total price
    totalElement.textContent = "₹ " + totalPrice.toFixed(2);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  loadCartFromLocalStorage();
  displaycart();
});

function Purchase(){
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items to the cart before making a purchase.");
  } else {
    alert("Thank you for your purchase!");
    
    clearCart();
  }
}



