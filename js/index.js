var teste
carregarJogosUbisoft()

function carregarJogosUbisoft() {
    document.getElementById('loading').style.display = 'block'
    fetch("json/ubisoft.json?3").then(function (response) {
        response.json().then(function (data) {
            montarJogosUbisoft(data)
            document.getElementById('loading').style.display = 'none'
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
        document.getElementById('loading').style.display = 'none'
    });
}

function carregarJogosSteam() {
    document.getElementById('loading').style.display = 'block'
    fetch("json/steam.json?3").then(function (response) {
        response.json().then(function (data) {
            montarJogosSteam(data)
            document.getElementById('loading').style.display = 'none'
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
        document.getElementById('loading').style.display = 'none'
    });
}


function montarJogosUbisoft(data) {
    divConteudo = document.getElementById('conteudo')
    htmlRetorno = ''
    data.forEach(element => {
        htmlRetorno += `

                <div class="card">
                    <a href=${element.linkLoja} target="_blank">
                        <img src=${element.capa} loading=lazy
                            alt="capa" class="capa">
                        <div class="container">
                            <h2 class="titulo"><b>${element.nome}</b></h2>
                            <p class="versao">${element.versao}</p>
                            <p class="price"><span>${element.precoDesconto}</span>
                                <stroke>${element.precoOriginal}</stroke>
                            </p>
                        </div>
                    </a>
                </div>

                `
    });

    divConteudo.innerHTML = htmlRetorno
}

function montarJogosSteam(data) {
    divConteudo = document.getElementById('conteudo')
    htmlRetorno = ''
    data.forEach(element => {
        htmlRetorno += `

                <div class="card steam">
                    <a href=${element.linkLoja} target="_blank">
                        <img src=${element.capa} loading=lazy
                            alt="capa" class="capa">
                        <div class="container">
                            <h2 class="titulo"><b>${element.nome}</b></h2>
                            <p class="price"><span>${element.precoDesconto}</span>
                                <stroke>${element.precoOriginal}</stroke>
                            </p>
                        </div>
                    </a>
                </div>

                `
    });

    divConteudo.innerHTML = htmlRetorno
}