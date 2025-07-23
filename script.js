
let cart = [];

function addToCart(productName, productPrice) {
  const existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name: productName, price: productPrice, qty: 1 });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty} - €${(item.price * item.qty).toFixed(2)}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Rimuovi";
    removeBtn.onclick = () => {
      cart = cart.filter(p => p.name !== item.name);
      updateCartDisplay();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartTotal.textContent = "Totale: €" + total.toFixed(2);
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.classList.toggle("hidden");
}

function checkout() {
  alert("Checkout non ancora integrato. Funzionalità in sviluppo.");
}
