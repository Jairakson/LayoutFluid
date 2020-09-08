const corpoProdutos = document.querySelector("[data-conteudo-Produtos]");

const exibeProdutos = (image, name, price) => {
 
    const divProdutos = document.createElement('div');
    divProdutos.classList.add("Produtos___Box");
    const divSapatos = `
                <img class="Produtos___Box__Imagem" src="${image}">
                <div class="Produtos___Box___Corpo">
                    <div class="Produtos___Box__Titulo">
                        <p class="Produtos___Box__Nome">${name}</p>
                    </div>
                    <div class="Produtos___Box__Preco">
                        <p class="Produtos__Box__Valor">R$ ${price}</p>
                    </div>
                    <div class="Produtos___Box__Botao">
                        <button class="Produtos___Botao">Comprar</button>  
                    </div>
                </div>
                 
        `
    divProdutos.innerHTML = divSapatos;
    return divProdutos;
}