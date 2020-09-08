const rodape = document.querySelector("[data-conteudo-Rodape]");

const divRodape = () => {
    const rodapeDiv = document.createElement('div');
    rodapeDiv.classList.add("footer", "container");
    const exibe = `
       
        `
    rodapeDiv.innerHTML = exibe;
    return rodapeDiv;
}

rodape.appendChild(divRodape());
