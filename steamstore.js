var listaJogosJson = []
var teste
if (window.location.href.includes('free')) {
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
}

function MontarJsonJogosGratuito() {

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
}

function montarImagem(url) {
    let splitUrl = url.split('/')
    return `${splitUrl[0]}//${splitUrl[2]}/${splitUrl[3]}/${splitUrl[4]}/${splitUrl[5]}/header.jpg`
}