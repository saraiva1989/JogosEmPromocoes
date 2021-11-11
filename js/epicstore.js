var listaJogosJson = []
var teste
if (window.location.href.includes('Free')) {
    MontarJsonJogosGratuito()
}
else {
    MontarJsonJogosPromocao()
}

function MontarJsonJogosPromocao() {
    //document.querySelector('section[data-component="BrowseMainContent"]')
    var todosJogos = document.querySelectorAll('section[data-component="BrowseMainContent"] li')
    todosJogos.forEach(element => {
        try {

            teste = element
            let nome = element.querySelector('[data-testid="direction-auto"]')
            let capa = element.querySelector('img').src
            let precoOriginal = element.querySelector('[data-component="PDPDiscountedFromPrice"]')
            let precoDesconto = element.querySelectorAll('span [data-component="Text"]')[1]
            let percentualDesconto = element.querySelector('[data-component="BaseTag"]')
            let linkLoja = element.querySelector('a').href
            listaJogosJson.push({
                nome: nome != null ? nome.textContent.trim() : null,
                capa: capa,
                precoOriginal: precoOriginal != null ? precoOriginal.textContent.trim() : null,
                precoDesconto: precoDesconto  != null ? precoDesconto.textContent.trim() : null,
                percentualDesconto: percentualDesconto != null ? percentualDesconto.textContent.trim() : null,
                linkLoja: linkLoja,
                loja: "epic",
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

    var todosJogos = document.querySelectorAll('section[data-component="BrowseMainContent"] li')
    todosJogos.forEach(element => {
        try {

            teste = element
            let nome = element.querySelector('[data-testid="direction-auto"]')
            let capa = element.querySelector('img').src
            let precoOriginal = element.querySelector('[data-component="PDPDiscountedFromPrice"]')
            let precoDesconto = element.querySelectorAll('span [data-component="Text"]')[1]
            let percentualDesconto = element.querySelector('[data-component="BaseTag"]')
            let linkLoja = element.querySelector('a').href
            listaJogosJson.push({
                nome: nome != null ? nome.textContent.trim() : null,
                capa: capa,
                precoOriginal: precoOriginal != null ? precoOriginal.textContent.trim() : null,
                precoDesconto: precoDesconto  != null ? precoDesconto.textContent.trim() : null,
                percentualDesconto: percentualDesconto != null ? percentualDesconto.textContent.trim() : null,
                linkLoja: linkLoja,
                loja: "epic",
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


//API JOGOS FREE
// https://www.epicgames.com/graphql?operationName=searchStoreQuery&variables=%7B%22allowCountries%22:%22BR%22,%22category%22:%22games%2Fedition%2Fbase%7Csoftware%2Fedition%2Fbase%7Ceditors%7Cbundles%2Fgames%22,%22count%22:40,%22country%22:%22BR%22,%22effectiveDate%22:%22[,2021-11-12T02:59:59.999Z]%22,%22freeGame%22:true,%22keywords%22:%22%22,%22locale%22:%22pt-BR%22,%22releaseDate%22:%22[,2021-11-12T02:59:59.999Z]%22,%22sortBy%22:%22releaseDate%22,%22sortDir%22:%22DESC%22,%22start%22:0,%22tag%22:%22%22,%22withPrice%22:true%7D&extensions=%7B%22persistedQuery%22:%7B%22version%22:1,%22sha256Hash%22:%220304d711e653a2914f3213a6d9163cc17153c60aef0ef52279731b02779231d2%22%7D%7D

//API JOGOS PROMO
//https://www.epicgames.com/graphql?operationName=searchStoreQuery&variables=%7B%22allowCountries%22:%22BR%22,%22category%22:%22games%2Fedition%2Fbase%7Csoftware%2Fedition%2Fbase%7Ceditors%7Cbundles%2Fgames%22,%22count%22:40,%22country%22:%22BR%22,%22effectiveDate%22:%22[,2021-11-12T02:59:59.999Z]%22,%22keywords%22:%22%22,%22locale%22:%22pt-BR%22,%22onSale%22:true,%22releaseDate%22:%22[,2021-11-12T02:59:59.999Z]%22,%22sortBy%22:%22releaseDate%22,%22sortDir%22:%22DESC%22,%22start%22:0,%22tag%22:%22%22,%22withPrice%22:true%7D&extensions=%7B%22persistedQuery%22:%7B%22version%22:1,%22sha256Hash%22:%220304d711e653a2914f3213a6d9163cc17153c60aef0ef52279731b02779231d2%22%7D%7D

