const corpoMenu = document.querySelector("[data-conteudo-menu]");

const ExibeMenu = () => {
    const divHeader = document.createElement('div');
    divHeader.classList.add("container");
    const exibe = `
    <div class="Menu__Mobile_Linha">
        <i class="fa fa-bars Menu___Mobile___Icon___Menu" aria-hidden="true"></i>
        <img class="Menu___Mobile___Logo" src="media/webJump.png">
        <i class="fa fa-search Menu___Mobile___Icon___Buscar" aria-hidden="true "></i>
     </div>  
        `
    divHeader.innerHTML = exibe;
    return divHeader;
}

corpoMenu.appendChild(ExibeMenu());


