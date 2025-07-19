
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(products) {
    products.forEach(product => {
        const container = document.querySelector(`.product-container[data-category='${product.categoria}']`);
        if (container) {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.immagine}" alt="${product.nome}">
                <h4>${product.nome}</h4>
                <p>€${product.prezzo.toFixed(2)}</p>
                <button onclick='addToCart(${JSON.stringify(product)})'>Aggiungi</button>
            `;
            container.appendChild(card);
        }
    });
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - €${item.prezzo.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.prezzo;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = `Totale: €${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    updateCart();
}

fetch("products.json")
    .then(res => res.json())
    .then(data => {
        renderProducts(data);
        updateCart();
    });
