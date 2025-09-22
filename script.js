import { PALAVRAS_RUINS } from "./palavrasRuins";

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);
@@ -44,11 +46,10 @@
}

function tiraPalavrasRuins(palavras) {
    const PALAVRAS_RUINS = new Set(["para", "uma", "nós"]);
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2) {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;