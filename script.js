
const prodotti = [
  {
    categoria: "One Piece",
    nome: "OP12 Booster Box",
    prezzo: 110.00,
    immagine: ""
  }
];

const categorie = [
  "One Piece",
  "Pokémon",
  "Yu-Gi-Oh",
  "Magic",
  "League of Legends",
  "Dragon Ball",
  "Lorcana"
];

let carrello = [];

window.onload = function() {
  const catContainer = document.getElementById("categorie");
  categorie.forEach(cat => {
    const a = document.createElement("a");
    a.textContent = cat;
    a.href = "#";
    catContainer.appendChild(a);
  });

  const prodottiContainer = document.getElementById("prodotti-principali");
  prodotti.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "prodotto";
    div.innerHTML = `
      <h4>${p.nome}</h4>
      <p>Categoria: ${p.categoria}</p>
      <p>€${p.prezzo.toFixed(2)}</p>
      <button onclick="aggiungiCarrello(${i})">Aggiungi</button>
    `;
    prodottiContainer.appendChild(div);
  });
};

function aggiungiCarrello(index) {
  carrello.push(prodotti[index]);
  aggiornaCarrello();
}

function aggiornaCarrello() {
  const lista = document.getElementById("carrello-lista");
  lista.innerHTML = "";
  let totale = 0;
  carrello.forEach((item, i) => {
    totale += item.prezzo;
    const li = document.createElement("li");
    li.textContent = item.nome + " - €" + item.prezzo.toFixed(2);
    lista.appendChild(li);
  });
  document.getElementById("totale").textContent = totale.toFixed(2);
  document.getElementById("cart-count").textContent = carrello.length;
}

function toggleCarrello() {
  const carrelloDiv = document.getElementById("carrello");
  carrelloDiv.style.display = carrelloDiv.style.display === "block" ? "none" : "block";
}

function svuotaCarrello() {
  carrello = [];
  aggiornaCarrello();
}
