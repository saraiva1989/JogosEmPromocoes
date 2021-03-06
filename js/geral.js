componenteHeader()
init()

function init() {
    let path = location.pathname;
    if (path === '/') {
        document.getElementsByName('index')[0].classList.add('botao-lojas-selecionado')
        return
    }
    let btnLojas = document.querySelectorAll('.botao-lojas')
    btnLojas.forEach(element => {
        if (path.includes(element.name)) {
            element.classList.add('botao-lojas-selecionado')
        }
        else {

        }
    });
}

window.addEventListener("scroll", function () {
    let btnTopo = this.document.getElementById('voltar-topo')
    if (this.scrollY > 2000) {
        btnTopo.style.margin = 0
        btnTopo.style.transition = '0.7s'
    } else {
        btnTopo.style.margin = '-70px'
        btnTopo.style.transition = '0.7s'
    }
})


function loading(status) {
    if (status) {
        document.getElementById('loading').style.display = 'block'
    }
    else {
        document.getElementById('loading').style.display = 'none'
    }
}

function cardModeloUbisoft(element) {
    try {
        return `
            <div class="card">
                <a href="${element.linkLoja}" target="_blank">
                    <img src="${element.capa}" loading=lazy alt="capa" class="capa">
                    <div class="container">
                        <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>
                        <p class="versao">${element.versao}</p>
                        <div class="price"><span>${element.precoDesconto == 0 ? "Gratuito" : "R$ " + element.precoDesconto.replace('.', ',')}</span>
                            <stroke>${element.precoOriginal.replace('.', ',')}</stroke>
                        </div>
                    </div>
                </a>
            </div>
    `
    }
    catch (error) {

    }
}

function cardModeloEpic(element) {
    return `
            <div class="card">
                <a href="${element.linkLoja}" target="_blank">
                    <img src="${element.capa}" loading=lazy alt="capa" class="capa">
                    <div class="container">
                        <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>
                        <div class="price"><span>${element.precoDesconto == 0 ? "Gratuito" : "R$ " + element.precoDesconto.replace('.', ',')}</span>
                            <stroke>${element.precoOriginal.replace('.', ',')}</stroke>
                        </div>
                    </div>
                </a>
            </div>
    `
}

function cardModeloComparaPreco(element) {

    let preco = ''

    if ((element.percentualDesconto == 0 && element.precoDesconto == 0) || (element.precoDesconto == element.precoOriginal)) {
        preco = `<div class="price"><span>${"R$ " + element.precoOriginal.replace('.', ',')}</span></div>`
    }
    else {
        preco = `<div class="price"><span>${element.precoDesconto == 0 ? "Gratuito" : "R$ " + element.precoDesconto.replace('.', ',')}</span>
                    <stroke>${element.precoOriginal.replace('.', ',')}</stroke>
                </div>`
    }

    return `
            <div class="card">
                <a href="${element.linkLoja}" target="_blank">
                    <div class="fundo-imagem">
                        <img src="${element.capa}" loading=lazy alt="capa" class="capa-pesquisa">
                    </div>
                    <div class="container">
                        <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>
                        <h2 class="titulo"><b>Loja: </b>${element.loja}</h2>
                        ${preco}
                    </div>
                </a>
            </div>
    `
}

function cardModeloPequeno(element) {
    return `
            <div class="card steam">
                <a href="${element.linkLoja}" target="_blank">
                    <img src="${element.capa}" loading=lazy alt="capa" class="capa">
                    <div class="container">
                        <h2 class="titulo"><b>${element.nome.substr(0, 55)}</b></h2>
                        <div class="price"><span>${element.precoDesconto == 0 ? "Gratuito" : "R$ " + element.precoDesconto.replace('.', ',')}</span>
                            <stroke>${element.precoOriginal.replace('.', ',')}</stroke>
                        </div>
                    </div>
                </a>
            </div>
    `
}

function componenteHeader() {
    let topo = `
    <div class="topo">
        <div class="btn opcoes-topo" id="opcoes-topo" style="display:none">
            <button onclick="window.location.href='index.html'">Promo????es</button>
            <button onclick="window.location.href='comparar-preco.html'">Comparar Pre??o</button>
            <button onclick="window.location.href='favoritos.html'">Favoritos</button>
        </div>
        <div id="voltar-topo" class="voltar-topo" onclick="window.scrollTo({top: 0,left: 0,behavior: 'smooth'});">
            <p><img src="img/topo.png" alt=""></p>
        </div>

        <div class="ambiente-dev" id="ambiente-dev">Ambiente DEV</div>
        
        <div id="lojas">
            <a id="loja-epic" name="index" class="botao-lojas btn-img epic" href="index.html">
            </a>
            <a id="loja-steam" name="steam" class="botao-lojas btn-img steam" href="steam.html">
            </a>
            <a id="loja-gog" name="gog" class="botao-lojas btn-img gog" href="gog.html">
            </a>
            <a id="loja-ubisoft" name="ubisoft" class="botao-lojas btn-img ubisoft" href="ubisoft.html">
            </a>
        </div>
    `
    if (document.getElementById('header') == null) {
        return
    }
    document.getElementById('header').innerHTML = topo
}

function ordenacaoApi(tipo, pagina, endpoint) {
    htmlRetorno = ''
    carregarJogosAPI(endpoint, `ordenacao=${tipo}&pagina=${pagina}`)
}

async function carregarJogosAPI(endpoint, queryString) {
    loading(true)
    let request = await fetch(`${urlAPIJogos}${endpoint}?${queryString}`)
    let data = await request.json()
    listaJogosData = data.games
    pagina = data.pagina
    total = data.totalPagina
    montarJogos(listaJogosData)
    loading(false)
}

async function carregarJogosAPILocal(url) {
    loading(true)
    let request = await fetch(url)
    let data = await request.json()
    listaJogosData = data
    montarJogos(listaJogosData)
    loading(false)
}


async function pesquisarPorNome() {
    loading(true)
    let divConteudo = document.getElementById('conteudo')
    let htmlRetorno = ''
    let nome = document.getElementById('input-nome').value
    localStorage.setItem('ultimaPesquisa', nome)
    let request = await fetch(`${urlAPIJogos}/comparapreco?nome=${nome}`)
    let data = await request.json()

    data.games.forEach(element => {
        htmlRetorno += cardModeloComparaPreco(element)
    });
    divConteudo.innerHTML = htmlRetorno

    loading(false)
    console.log(data)
}

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        pesquisarPorNome()
    }
}

function salvarFavoritos() {
    if(document.querySelector('#conteudo').textContent.trim().length == 0) {
        return
    }
    
    let listaFavoritos = []
    
    if(localStorage.getItem('listaFavoritos') != null) {
     listaFavoritos = JSON.parse(localStorage.getItem('listaFavoritos'))
    }
    
    if(listaFavoritos.find(x => x.termoPesquisa == localStorage.getItem('ultimaPesquisa')) !== undefined) {
        return
    }

    let img = document.querySelector('#conteudo img').src
    let nome = document.querySelector('#conteudo .titulo').textContent
    let itemFavorito = {imagem: img, nome: nome, termoPesquisa: localStorage.getItem('ultimaPesquisa')}
    
    listaFavoritos.push(itemFavorito)
    localStorage.setItem('listaFavoritos', JSON.stringify(listaFavoritos))

    let toast = document.getElementById('toast')

    toast.classList.add('toastShow')
    setInterval(function(){     toast.classList.remove('toastShow')  }, 3000);

}