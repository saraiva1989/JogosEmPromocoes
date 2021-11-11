var listaJogosJson = []
var teste
if (window.location.href.includes('Free')) {
    MontarJsonJogosGratuito()
}
else {
    MontarJsonJogosPromocao()
}

function MontarJsonJogosPromocao() {

    var todosJogos = document.querySelectorAll('#search_resultsRows a')
    todosJogos.forEach(element => {
        try {

            teste = element
            let nome = element.querySelector('.title')
            let capa = montarImagem(element.querySelector('img').src)
            let versao = null
            let precoOriginal = element.querySelector('strike')
            let precoDesconto = `R$${element.querySelector('.discounted').textContent.split('R$')[2].trim()}`
            let percentualDesconto = element.querySelector('.search_discount span')
            let linkLoja = element.href
            listaJogosJson.push({
                nome: nome != null ? nome.textContent.trim() : null,
                capa: capa,
                versao: versao != null ? versao.textContent.trim() : null,
                precoOriginal: precoOriginal != null ? precoOriginal.textContent.trim() : null,
                precoDesconto: precoDesconto,
                percentualDesconto: percentualDesconto != null ? percentualDesconto.textContent.trim() : null,
                linkLoja: linkLoja,
                loja: "steam",
                gratuito: false,
                tipoGratuito: null
            })
        }
        catch (error) {
            console.log(error)
        }
    })
    console.log(listaJogosJson)
}

function MontarJsonJogosGratuito() {

    var todosJogos = document.querySelectorAll('#search_resultsRows a')
    todosJogos.forEach(element => {
        try {
            teste = element
            let nome = element.querySelector('.title')
            let capa = montarImagem(element.querySelector('img').src)
            let versao = null
            let linkLoja = element.href
            let tipoGratuito = element.querySelector('.search_price')
            listaJogosJson.push({
                nome: nome != null ? nome.textContent.trim() : null,
                capa: capa,
                versao: versao != null ? versao.textContent.trim() : null,
                linkLoja: linkLoja,
                loja: "steam",
                gratuito: true,
                tipoGratuito: tipoGratuito != null ? tipoGratuito.textContent.trim() : null,
            })
        }
        catch (error) {
            console.log(error)
        }
    })
    console.log(listaJogosJson)
}

function montarImagem(url) {
    let splitUrl = url.split('/')
    return `${splitUrl[0]}//${splitUrl[2]}/${splitUrl[3]}/${splitUrl[4]}/${splitUrl[5]}/header.jpg`
}

//API PROMO
//https://store.steampowered.com/search/results/?query&start=1&count=50&dynamic_data=&sort_by=_ASC&snr=1_7_7_2300_7&specials=1&category1=998&infinite=1

//API FREE
//https://store.steampowered.com/search/results/?query&start=0&count=50&dynamic_data=&sort_by=Released_DESC&snr=1_7_7_230_7&genre=Free%20to%20Play&maxprice=free&category1=998&infinite=1

