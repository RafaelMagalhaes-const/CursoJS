function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var hora = 14
    if (hora >= 0 && hora < 12){
        //BOM DIA !
        //colocar a foto depois no html
        //img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE !
        //colocar a foto depois no html
        //img.src = 'fototarde.png'
        document.body.style.background = '#000090'
    }else {
        //BOA NOITE !
        //colocar a foto depois no html
        //img.src = 'fotonoite.png'
        document.body.style.background = '#000000'
    }
}