var teste
carregarJogosUbisoft()

function carregarJogosUbisoft() {
    loading(true, 'Ubisoft')
    fetch("json/ubisoft.json?3").then(function (response) {
        response.json().then(function (data) {
            montarJogosUbisoft(data)
            loading(false, 'Ubisoft')
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
        loading(false, 'Ubisoft')
    });
}

function carregarJogosSteam() {
    loading(true, 'Steam')
    fetch("json/steam.json?3").then(function (response) {
        response.json().then(function (data) {
            montarJogosSteam(data)
            loading(false, 'Steam')
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
        loading(false, 'Steam')
    });
}

function carregarJogosGog() {
    loading(true, 'GOG')
    fetch("json/gog.json?3").then(function (response) {
        response.json().then(function (data) {
            montarJogosSteam(data)
            loading(false, 'GOG')
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
        loading(false, 'GOG')
    });
}


function carregarJogosEpic() {
    loading(true, 'Epic')
    fetch("json/epic.json?3").then(function (response) {
        response.json().then(function (data) {
            montarJogosEpic(data)
            loading(false, 'Epic')
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
        loading(false, 'Epic')
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
                            <h2 class="titulo"><b>${element.nome.substr(0,55)}</b></h2>
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
    let newData = data.slice(0, 500)
    newData.forEach(element => {
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

function montarJogosEpic(data) {
    divConteudo = document.getElementById('conteudo')
    htmlRetorno = ''
    data.forEach(element => {
        htmlRetorno += `

                <div class="card">
                    <a href=${element.linkLoja} target="_blank">
                        <img src=${element.capa} loading=lazy
                            alt="capa" class="capa">
                        <div class="container">
                            <h2 class="titulo"><b>${element.nome.substr(0,55)}</b></h2>
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

function loading(status, loja) {
    document.querySelector('#loja-selecionada h2').textContent = `Loja Selecionada: ${loja}`
    if(status){
        document.getElementById('loading').style.display = 'block'
    }
    else {
        document.getElementById('loading').style.display = 'none'
    }
}