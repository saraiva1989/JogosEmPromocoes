var urlAPIJogos = ""
const arrayHostDev = ["jogosempromocoesdev.netlify.app", "localhost:5500", "127.0.0.1:5500", "192.168.31.25:5500"]
const arrayHostProd = ["saraiva1989.github.io"]
urlApi()

function urlApi() {
    arrayHostProd.forEach(element => {
        if (window.location.host === element) {
            urlAPIJogos = 'https://jogosempromocoes.azurewebsites.net/api/jogos/'
        }
    });

    arrayHostDev.forEach(element => {
        if (window.location.host === element) {
            urlAPIJogos = 'https://jogosempromocoesdev.azurewebsites.net/api/jogos/'
            document.getElementById('ambiente-dev').style.display = 'block'
        }
    })
}
