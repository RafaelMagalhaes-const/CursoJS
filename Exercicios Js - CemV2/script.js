function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                // para atribuir a imagem img.setAttribute('src', 'nome da imgem aqui')
            } else if (idade < 21){
                //Jovem
            } else if (idade < 50){
                //Adulto
            }else {
                //Senhor
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
            } else if (idade < 21){
                //Jovem
            } else if (idade < 50){
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //Para acrescentar a imagem que colocamos ali em cima, usamos:
        //res.appendChild(img)
    }
}