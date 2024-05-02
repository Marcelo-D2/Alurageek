import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(imagem1, imagem2, categoria, titulo, preco2, preco1) {
	const card = document.createElement("li");
	card.className = "cards_item";
	card.innerHTML = `<div class="product_grid container">
	<div class="card">
		<div class="showcase flip-card flip-horizontal-left">
			<div class="flip-card-inner">
				<div class="showcase_banner flip-card-front">
					<img src="${imagem1}" alt="figure action" width="300" class="card-front">
				</div>
				<div class="showcase_banner flip-card-back">
					<img src="${imagem2}" alt="figure action" width="300" class="card-back">
				</div>
			</div>

			<div class="showcase_content">
				<a href="#" class="showcase_category">${categoria}</a>
				<a href="#">
					<h3 class="showcase_title">${titulo}</h3>
				</a>
			</div>
			<div class="price_box">
				<p class="price">${preco2}</p>
				<del>${preco1}</del>
			</div>
		</div>
	</div>
</div>`
	
	return card;
}

async function listaCards() {
	try {
		const listaApi = await conectaApi.listaCards();
		listaApi.forEach(elemento => lista.appendChild(
			constroiCard(elemento.imagem1, elemento.imagem2, elemento.categoria, elemento.titulo, elemento.preco2, elemento.preco1)))
	} catch {
		lista.innerHTML = `<h2 class="mensagem_titulo">Não foi possível carregar a lista de cards</h2>`;
	}
}

listaCards();
