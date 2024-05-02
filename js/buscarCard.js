import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarCards.js";

async function buscarCard(evento) {
	evento.preventDefault();
	const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
	const busca = await conectaApi.buscaCard(dadosDePesquisa);

	const lista = document.querySelector("[data-lista]");

	while (lista.firstChild) {
		lista.removeChild(lista.firstChild);
	}

	busca.forEach(elemento => lista.appendChild(
		constroiCard(elemento.imagem1, elemento.imagem2, elemento.categoria, elemento.titulo, elemento.preco2, elemento.preco1)))

	if (busca.length == 0) {
		lista.innerHTML = `<h2 class="mensagem_titulo">Não existem cards com esse termo</h2>`
	}
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarCard(evento));