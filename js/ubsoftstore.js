var listaJogosJson = []
var teste
let position = 0

if(window.location.href.includes('free')) {
    MontarJsonJogosGratuito()
}
else {
    MontarJsonJogosPromocao()
}

function MontarJsonJogosPromocao() {
    
    var todosJogos = document.querySelectorAll(`.samples #search-result-items li`)
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
                    precoOriginal: precoOriginal != null ? precoOriginal.textContent.trim().replace('R$','') : null,
                    precoDesconto: precoDesconto != null ? precoDesconto.textContent.trim().replace('R$','') : null,
                    percentualDesconto: percentualDesconto != null ? percentualDesconto.textContent.trim() : null,
                    linkLoja: linkLoja,
                    loja: "ubisoft",
                    gratuito: false,
                    position: position++,
                    tipoGratuito: null
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    })
    console.log(listaJogosJson)
}

function MontarJsonJogosGratuito() {
    
    var todosJogos = document.querySelectorAll(`.samples #search-result-items li`)
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
                    position: position++,
                    tipoGratuito: tipoGratuito != null ? tipoGratuito.textContent.trim() : null
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    })
    console.log(listaJogosJson)
}