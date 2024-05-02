import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarCard(evento) {
	evento.preventDefault();

	const imagem1 = document.querySelector("[data-imagem1]").value;
	const imagem2 = document.querySelector("[data-imagem2]").value;
	const categoria = document.querySelector("[data-categoria]").value;
	const titulo = document.querySelector("[data-titulo]").value;
	const preco2 = document.querySelector("[data-preco2]").value;
	const preco1 = document.querySelector("[data-preco1]").value;
	try{
		await conectaApi.criaCards(imagem1, imagem2, categoria, titulo, preco2, preco1);

		window.location.href = "../envio_concluido.html";
	} catch (e) {
		alert(e);
	}
}

formulario.addEventListener("submit", evento => criarCard(evento))
