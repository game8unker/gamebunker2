
const products = [
  { name: "OP01", price: 399.90, img: "op01.jpg" },
  { name: "OP02", price: 189.90, img: "op02.jpg" },
  { name: "OP04", price: 179.90, img: "op04.jpg" },
  { name: "OP05", price: 199.90, img: "op05.jpg" },
  { name: "OP06", price: 129.90, img: "op06.jpg" },
  { name: "OP07", price: 99.90, img: "op07.jpg" },
  { name: "OP08", price: 99.90, img: "op08.webp" },
  { name: "OP09", price: 149.90, img: "op09.jpg" },
  { name: "OP10", price: 99.90, img: "op10.webp" },
  { name: "OP12", price: 99.90, img: "op12.jpg" },
  { name: "OP13", price: 99.90, img: "op13.webp" },
  { name: "OP IB03", price: 39.90, img: "OPIB-03-BOX-EN.png" },
  { name: "OPIB04", price: 39.90, img: "OPIB-04-BOX-EN.png" },
  { name: "OP 2nd Anniversary", price: 219.90, img: "2nd anniversary.jfif" },
  { name: "LOL Riftbound Booster Box", price: 109.90, img: "riftbound booster box.webp" },
  { name: "LOL Deck 1", price: 19.90, img: "Starter Deck 1.webp" },
  { name: "LOL Deck 2", price: 19.90, img: "Starter Deck 2.webp" },
  { name: "LOL Deck 3", price: 19.90, img: "Starter Deck 3.webp" }
];

const container = document.getElementById("product-container");

products.forEach((p) => {
  container.innerHTML += `
    <div class="product">
      <img src="assets/images/${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>€${p.price.toFixed(2)}</p>
      <button>Aggiungi al carrello</button>
    </div>
  `;
});
