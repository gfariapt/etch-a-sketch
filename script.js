const container = document.querySelector(".container");
const frag = document.createDocumentFragment();
const button = document.querySelector("#botaoReset");

for(let i = 0; i < 256; i++){
    const celula = document.createElement("div");
    celula.classList.add("celula");
    celula.addEventListener("mouseover", () => {
        celula.style.backgroundColor = "black";
    })
    frag.appendChild(celula);
}

container.appendChild(frag);

button.addEventListener("click", () => {
    let valor = prompt("Quantos quadrados por lado? (máx 100)");
    if (valor > 100) valor = 100;
    if (valor < 1 || isNaN(valor)) {
        return;
    }

    container.innerHTML = "";
    container.style.setProperty("--n", valor);

    const frag = document.createDocumentFragment();

    for(let i = 0; i < valor * valor; i++){
        const celula = document.createElement("div");
        celula.classList.add("celula");
        celula.addEventListener("mouseover", () => {
            celula.style.backgroundColor = "black";
        })
        frag.appendChild(celula);
    }
    container.appendChild(frag);
})