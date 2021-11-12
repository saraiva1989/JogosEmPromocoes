carregarHeader()

async function carregarHeader() {
    await fetch("../header.html").then(function (response) {
        response.text().then(function (data) {
            document.getElementById('header').innerHTML = data
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
    });
}

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


function ordenacaoApi(tipo, pagina) {
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