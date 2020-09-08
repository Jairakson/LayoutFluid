const corpoHeader = document.querySelector("[data-conteudo-header]");

const exibeHeader = () => {
    const divHeader = document.createElement('div');
    divHeader.classList.add("container");
    const exibe = `
        <div class="Texto-Top1">
            <p class="textoHeader">
                <a href="#">Acesse sua conta</a> ou
                <a href="#">Cadastre-se</a>
            </p>
        </div>
        `
    divHeader.innerHTML = exibe;
    return divHeader;
}

corpoHeader.appendChild(exibeHeader());
