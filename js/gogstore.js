var listaJogosJson = []
var teste
let position = 0

if (window.location.href.includes('free')) {
    MontarJsonJogosGratuito()
}
else {
    MontarJsonJogosPromocao()
}

function MontarJsonJogosPromocao() {
    let quantidade = 0
    //document.querySelector('section[data-component="BrowseMainContent"]')
    var todosJogos = document.querySelectorAll('.catalog__games-list .product-tile.has-discount')
    todosJogos.forEach(element => {
        try {
            quantidade++
            if (quantidade > 48) {
                return
            }
            teste = element
            let nome = teste.querySelector('.product-tile__title')
            let capa = element.querySelector('img').src
            let precoOriginal = element.querySelector('.product-tile__price._price')
            let precoDesconto = element.querySelector('.product-tile__price-discounted._price')
            let percentualDesconto = element.querySelector('.product-tile__discount')
            let linkLoja = element.querySelector('a').href
            listaJogosJson.push({
                nome: nome != null ? nome.textContent.trim() : null,
                capa: capa,
                precoOriginal: precoOriginal != null ? precoOriginal.textContent.trim().replace('R$','') : null,
                precoDesconto: precoDesconto != null ? precoDesconto.textContent.trim().replace('R$','') : null,
                percentualDesconto: percentualDesconto != null ? percentualDesconto.textContent.trim() : null,
                linkLoja: linkLoja,
                loja: "GOG",
                gratuito: false,
                position: position++,
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

    let quantidade = 0
    //document.querySelector('section[data-component="BrowseMainContent"]')
    var todosJogos = document.querySelectorAll('.catalog__games-list .product-tile')
    todosJogos.forEach(element => {
        try {
            quantidade++
            if (quantidade > 48) {
                return
            }
            teste = element
            let nome = teste.querySelector('.product-tile__title')
            let capa = element.querySelector('img').src
            let precoOriginal = element.querySelector('.product-tile__price._price')
            let precoDesconto = element.querySelector('.product-tile__price-discounted._price')
            let percentualDesconto = element.querySelector('.product-tile__discount')
            let linkLoja = element.querySelector('a').href
            listaJogosJson.push({
                nome: nome != null ? nome.textContent.trim() : null,
                capa: capa,
                precoOriginal: precoOriginal != null ? precoOriginal.textContent.trim().replace('R$','') : null,
                precoDesconto: precoDesconto != null ? precoDesconto.textContent.trim().replace('R$','') : null,
                percentualDesconto: percentualDesconto != null ? percentualDesconto.textContent.trim() : null,
                linkLoja: linkLoja,
                loja: "GOG",
                gratuito: false,
                position: position++,
                tipoGratuito: null
            })
        }
        catch (error) {
            console.log(error)
        }
    })
    console.log(listaJogosJson)
}


//API JOGOS FREE
// https://www.gog.com/games/ajax/filtered?hide=dlc&mediaType=game&page=1&price=free&sort=popularity

//API JOGOS PROMO
//https://www.gog.com/games/ajax/filtered?hide=dlc&mediaType=game&page=1&price=discounted&sort=popularity


