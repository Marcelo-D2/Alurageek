async function listaCards() {
	const conexao = await fetch("http://localhost:3000/cards");
	const conexaoConvertida = await conexao.json();

	return conexaoConvertida;
}

async function criaCards(imagem1, imagem2, categoria, titulo, preco2, preco1) {
	const conexao = await fetch("http://localhost:3000/cards", {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			imagem1: `${imagem1}`,
			imagem2: `${imagem2}`,
			categoria: `${categoria}`,
			titulo: `${titulo}`,
			preco2: `${preco2}`,
			preco1: `${preco1}`
		})
	});
	if(!conexao.ok){
		throw new Error("Não foi possível enviar o card")
	}
	const conexaoConvertida = await conexao.json();

	return conexaoConvertida;
}

async function buscaCard(termoDeBusca) {
	const conexao = await fetch(`http://localhost:3000/cards?q=${termoDeBusca}`);
	const conexaoConvertida = conexao.json();

	return conexaoConvertida;
}

export const conectaApi = {
	listaCards,
	criaCards, 
	buscaCard
}