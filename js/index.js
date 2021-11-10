var teste
carregarJogosUbisoft()

function carregarJogosUbisoft() {
    fetch("json/ubisoft.json").then(function (response) {
        response.json().then(function (data) {
            montarJogosUbisoft(data)
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
    });
}

function carregarJogosSteam() {
    fetch("json/steam.json").then(function (response) {
        response.json().then(function (data) {
            montarJogosSteam(data)
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
    });
}


function montarJogosUbisoft(data) {
    divConteudo = document.getElementById('conteudo')
    htmlRetorno = ''
    data.forEach(element => {
        htmlRetorno += `

                <div class="card">
                    <a href=${element.linkLoja} target="_blank">
                        <img src=${element.capa}
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
                        <img src=${element.capa}
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