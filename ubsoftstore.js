var listaJogosJson = []
var teste
if (window.location.href.includes('free')) {
    MontarJsonJogosGratuito()
}
else {
    MontarJsonJogosPromocao()
}

function MontarJsonJogosPromocao() {

    var todosJogos = document.querySelectorAll(`#search-result-items li`)
    todosJogos.forEach(element => {
        try {
            teste = element
            let dlc = element.querySelector('.dlc')
            if (dlc == null) {

                teste = element
                let nome = element.querySelector('.prod-title')
                let capa = element.querySelector('img').src
                let versao = element.querySelector('.card-subtitle')
                let precoOriginal = element.querySelector('.price-standard')
                let precoDesconto = element.querySelector('.price-sales.standard-price')
                let percentualDesconto = element.querySelector('.deal-percentage')
                let linkLoja = element.querySelector('a').href
                listaJogosJson.push({
                    nome: nome != null ? nome.textContent.trim() : null,
                    capa: capa,
                    versao: versao != null ? versao.textContent.trim() : null,
                    precoOriginal: precoOriginal != null ? precoOriginal.textContent.trim() : null,
                    precoDesconto: precoDesconto != null ? precoDesconto.textContent.trim() : null,
                    percentualDesconto: percentualDesconto != null ? percentualDesconto.textContent.trim() : null,
                    linkLoja: linkLoja,
                    loja: "ubisoft",
                    gratuito: false,
                    tipoGratuito: null
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    })
}

function MontarJsonJogosGratuito() {

    var todosJogos = document.querySelectorAll(`#search-result-items li`)
    todosJogos.forEach(element => {
        try {
            teste = element
            let dlc = element.querySelector('.dlc')
            if (dlc == null) {

                teste = element
                let nome = element.querySelector('.prod-title')
                let capa = element.querySelector('img').src
                let versao = element.querySelector('.card-subtitle')
                let linkLoja = element.querySelector('a').href
                let tipoGratuito = element.querySelector('.free-offer-label')
                listaJogosJson.push({
                    nome: nome != null ? nome.textContent.trim() : null,
                    capa: capa,
                    versao: versao != null ? versao.textContent.trim() : null,
                    linkLoja: linkLoja,
                    loja: "ubisoft",
                    gratuito: true,
                    tipoGratuito: tipoGratuito != null ? tipoGratuito.textContent.trim() : null
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    })
}