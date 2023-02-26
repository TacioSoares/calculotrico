var formulario = document.querySelector('#formulario')
var campoResposta = document.querySelector('#resposta')

/*window.onload = function() {
    var body = document.querySelector('#body')
    body.style.backgroundImage = 'url(../imagens/colecao-de-fios-macios.jpg)'
}*/
formulario.addEventListener("submit", function(event){
    event.preventDefault()
    campoResposta.innerHTML = ''
    var dados = pegarValores()
    mostraResposta(realizarCalculos(dados))
})

function pegarValores() {
    var dados = document.querySelectorAll('.input-number')
    return dados
}
function realizarCalculos(dados) {
    var resultadoPontos = Math.round((dados[1].value * dados[4].value) / dados[0].value)
    var resultadoCarreira = Math.round((dados[3].value * dados[5].value) / dados[2].value)
    return {
        resultadoPontos,
        resultadoCarreira
    }
    
}
function mostraResposta(resultado) {
    if(isNaN(resultado.resultadoPontos) || isNaN(resultado.resultadoCarreira)) {
        window.alert('Você precisa definir os valores')
    } else {
        campoResposta.innerHTML = `<p>A sua peça deverá ter:</p>      <p><strong>${resultado.resultadoPontos}</strong> pontos</p>
        <p><strong>${resultado.resultadoCarreira}</strong> carreiras.</p>`
    }
    
}