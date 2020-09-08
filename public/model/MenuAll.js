const menuall = document.querySelector("[data-conteudo-MenuAll]");

const exibeMenu = () =>{
    const divMenu = document.createElement('div');
    divMenu.classList.add("container");

    const exibe = `
        <div class="row">
        <div class=col-md-12>
            <ul class=menu>
            <li><a href="">Página Inicial</a></li>
            <li><a href="">Camisetas</a></li>
            <li><a href="">Calças</a></li>
            <li><a href="">Sapatos</a></li>
            <li><a href="">Contato</a></li>
            </ul>
        </div>
        </div>
    `

    divMenu.innerHTML = exibe;
    return divMenu;
}

menuall.appendChild(exibeMenu());