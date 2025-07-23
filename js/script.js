
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p><strong>€${product.price.toFixed(2)}</strong></p>
      <button class="add-to-cart" data-name="${product.title}" data-price="${product.price}">Aggiungi al carrello</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      cart.push({ name, price });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} aggiunto al carrello!`);
    });
  });
});
