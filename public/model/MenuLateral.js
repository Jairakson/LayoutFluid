const menuLateral = document.querySelector("[data-conteudo-menuLateral]");

const exibirMenuLateral = () =>{

    const lateralMenu = document.createElement('div');
    lateralMenu.classList.add("boxMenulateral");

    const exibe = `
        <h2 class="tilteMenuLateral">FILTRE POR</h2>
        <h3 class="subTileMenuLateral">CATEGORIAS</h3>
        <ul>
        <li><a class="linkMenuLateral" href="">Roupas</a></li>
        <li><a class="linkMenuLateral" href="">Sapatos</a></li>
        <li><a class="linkMenuLateral" href="">Acessórios</a></li>
        </ul>
        <h3 class="subTileMenuLateral">CORES</h3>
        <button class="btnVermelho" type="submit"></button>
        <button class="btnLaranja" type="submit"></button>
        <button class="btnAzul" type="submit"></button>
        <h3 class="subTileMenuLateral">TIPOS</h3>
        <ul>
        <li><a class="linkMenuLateral" href="">Corrida</a></li>
        <li><a class="linkMenuLateral" href="">Caminhada</a></li>
        <li><a class="linkMenuLateral" href="">Casual</a></li>
        <li><a class="linkMenuLateral" href="">Social</a></li>
        </ul>
    `

    lateralMenu.innerHTML = exibe;
    return lateralMenu;
}

menuLateral.appendChild(exibirMenuLateral());