
function renderProducts() {
    const onePiece = [
{name: "OP01", image: "assets/images/op01.jpg", price: 399.9},{name: "OP02", image: "assets/images/op02.jpg", price: 189.9},{name: "OP04", image: "assets/images/op04.jpg", price: 179.9},{name: "OP05", image: "assets/images/op05.jpg", price: 199.9},{name: "OP06", image: "assets/images/op06.jpg", price: 129.9},{name: "OP07", image: "assets/images/op07.jpg", price: 99.9},{name: "OP08", image: "assets/images/op08.webp", price: 99.9},{name: "OP09", image: "assets/images/op09.jpg", price: 149.9},{name: "OP10", image: "assets/images/op10.webp", price: 99.9},{name: "OP12", image: "assets/images/op12.jpg", price: 99.9},{name: "OP13", image: "assets/images/op13.webp", price: 99.9},{name: "OPIB03", image: "assets/images/OPIB-03-BOX-EN.png", price: 39.9},{name: "OPIB04", image: "assets/images/OPIB-04-BOX-EN.png", price: 39.9},{name: "2nd Anniversary", image: "assets/images/2nd anniversary.jfif", price: 219.9}
    ];

    const lol = [
{name: "Riftbound Booster Box", image: "assets/images/riftbound booster box.webp", price: 109.9},{name: "LOL Deck 1", image: "assets/images/Starter Deck 1.webp", price: 19.9},{name: "LOL Deck 2", image: "assets/images/Starter Deck 2.webp", price: 19.9},{name: "LOL Deck 3", image: "assets/images/Starter Deck 3.webp", price: 19.9}
    ];

    const onePieceContainer = document.getElementById("onepiece-products");
    const lolContainer = document.getElementById("lol-products");

    [...onePiece].forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><p>${p.price.toFixed(2)} €</p><button>Aggiungi al carrello</button>`;
        onePieceContainer.appendChild(card);
    });

    [...lol].forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><p>${p.price.toFixed(2)} €</p><button>Aggiungi al carrello</button>`;
        lolContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);
