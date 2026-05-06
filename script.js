// Nome
document.getElementById("nome").textContent = dados.nome;

// WhatsApp
document.getElementById("whatsappBtn").href =
    "https://wa.me/" + dados.whatsapp + "?text=Olá quero marcar um corte";

// Frases animadas
let i = 0;
const fraseEl = document.getElementById("frase");

fraseEl.textContent = dados.frases[0];

setInterval(() => {
    fraseEl.classList.add("fade-out");

    setTimeout(() => {
        i = (i + 1) % dados.frases.length;
        fraseEl.textContent = dados.frases[i];
        fraseEl.classList.remove("fade-out");
    }, 500);

}, 5000);


// Preços
const precosContainer = document.getElementById("precos");

dados.precos.forEach(preco => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.textContent = preco;
    precosContainer.appendChild(div);
});