carregarHeader()

function loading(status) {
    if (status) {
        document.getElementById('loading').style.display = 'block'
    }
    else {
        document.getElementById('loading').style.display = 'none'
    }
}

function cardModeloUbisoft(element) {
    return `
            <div class="card">
                <a href="${element.linkLoja}" target="_blank">
                    <img src="${element.capa}" loading=lazy alt="capa" class="capa">
                    <div class="container">
                        <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>
                        <p class="versao">${element.versao}</p>
                        <p class="price"><span>${element.precoDesconto == 0 ? "Gratuito" : "R$ " + element.precoDesconto.replace('.', ',')}</span>
                            <stroke>${element.precoOriginal.replace('.', ',')}</stroke>
                        </p>
                    </div>
                </a>
            </div>
    `
}

function cardModeloEpic(element) {
    return `
            <div class="card">
                <a href="${element.linkLoja}" target="_blank">
                    <img src="${element.capa}" loading=lazy alt="capa" class="capa">
                    <div class="container">
                        <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>
                        <p class="price"><span>${element.precoDesconto == 0 ? "Gratuito" : "R$ " + element.precoDesconto.replace('.', ',')}</span>
                            <stroke>${element.precoOriginal.replace('.', ',')}</stroke>
                        </p>
                    </div>
                </a>
            </div>
    `
}

function cardModeloPequeno(element) {
    return `
            <div class="card steam">
                <a href="${element.linkLoja}" target="_blank">
                    <img src="${element.capa}" loading=lazy alt="capa" class="capa">
                    <div class="container">
                        <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>
                        <p class="price"><span>${element.precoDesconto == 0 ? "Gratuito" : "R$ " + element.precoDesconto.replace('.', ',')}</span>
                            <stroke>${element.precoOriginal.replace('.', ',')}</stroke>
                        </p>
                    </div>
                </a>
            </div>
    `
}

function carregarHeader () {
    let topo = `
    <div class="topo">
        <div class="ambiente-dev" id="ambiente-dev">Ambiente DEV</div>
        <div id="lojas">
            <a id="loja-epic" class="botao-lojas btn-img epic" href="index.html">
            </a>
            <a id="loja-ubisoft" class="botao-lojas btn-img ubisoft" href="ubisoft.html">
            </a>
            <a id="loja-steam" class="botao-lojas btn-img steam" href="steam.html">
            </a>
            <a id="loja-gog" class="botao-lojas btn-img gog" href="gog.html">
            </a>
        </div>
    `
    document.getElementById('header').innerHTML = topo
}


function ordenacaoApi(tipo, pagina) {
    htmlRetorno = ''
    if (tipo == "popular") {
        carregarJogosAPI('popularidade', pagina)
    }
    
    if (tipo == "preco") {
        carregarJogosAPI('preco', pagina)
    }
    
    if (tipo == "nome") {
        carregarJogosAPI('nome', pagina)
    }
}