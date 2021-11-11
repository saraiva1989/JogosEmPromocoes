var teste
let listaJogosData
let store
carregarJogosUbisoft()

function carregarJogos(url) {
    loading(true)
    fetch(url + "?4").then(function (response) {
        response.json().then(function (data) {
            listaJogosData = data
            montarJogos(listaJogosData)
            loading(false)
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
        loading(false)
    });
}

function carregarJogosUbisoft() {
    store = 'Ubisoft'
    carregarJogos("json/ubisoft.json")
}

function carregarJogosSteam() {
    store = 'Steam'
    carregarJogos("json/steam.json")
}

function carregarJogosGog() {
    store = 'GOG'
    carregarJogos("json/gog.json")
}


function carregarJogosEpic() {
    store = 'Epic'
    carregarJogos("json/epic.json")
}

function montarJogos(data) {
    divConteudo = document.getElementById('conteudo')
    htmlRetorno = ''
    if (store == 'Steam') {
        debugger
        data = data.slice(0, 200)
    }
    data.forEach(element => {

        let abriCard = `<div class="card">`

        if (store == 'Steam' || store == 'GOG') {
            abriCard = `<div class="card steam">`
        }

        let cardPadrao = `
                    <a href=${element.linkLoja} target="_blank">
                        <img src=${element.capa} loading=lazy
                            alt="capa" class="capa">
                        <div class="container">
                            <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>`

        let versao = `<p class="versao">${element.versao}</p>`

        if (store == 'Steam' || store == 'GOG' || store == 'Epic') {
            versao = `<p class="versao" style='display:none;'>${element.versao}</p>`
        }

        let precos = `                            
        <p class="price"><span>${element.precoDesconto}</span>
        <stroke>${element.precoOriginal}</stroke></p>`

        let fecharCard = `</div></a></div>`

        let card = abriCard + cardPadrao + versao + precos + fecharCard

        htmlRetorno += card
    });

    divConteudo.innerHTML = htmlRetorno
}



function loading(status) {
    document.getElementById('ordem').value = 'popular'
    document.querySelector('#loja-selecionada h2').textContent = `Loja Selecionada: ${store}`
    if (status) {
        document.getElementById('loading').style.display = 'block'
    }
    else {
        document.getElementById('loading').style.display = 'none'
    }
}

function ordenacao(tipo) {
    if (tipo == "popular") {
        listaJogosData.sort((a, b) => parseFloat(a.position) - parseFloat(b.position));
    }

    if (tipo == "preco") {
        listaJogosData.sort((a, b) => parseFloat(a.precoDesconto) - parseFloat(b.precoDesconto));
    }

    if (tipo == "nome") {
        listaJogosData.sort((a, b) => {
            let fa = a.nome.toLocaleLowerCase(),
                fb = b.nome.toLocaleLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
    }

    montarJogos(listaJogosData)

}

//listaJogosJson.sort((a, b) => parseFloat(a.precoDesconto) - parseFloat(b.precoDesconto));

