alert("Bienvenid@ maestr@ puchamon 😊")

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego () {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonPuchamonJugador = document.getElementById('boton-puchamon')
    botonPuchamonJugador.addEventListener('click', seleccionarPuchamonJugador)

    let botonRayo = document.getElementById ('boton-rayo')
    botonRayo.addEventListener('click', ataqueRayo)
    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById ('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonHierva = document.getElementById ('boton-hierva')
    botonHierva.addEventListener('click', ataqueHierva)
    let botonPiedra = document.getElementById ('boton-piedra')
    botonPiedra.addEventListener('click', ataquePiedra)
    let botonBicho = document.getElementById ('boton-bicho')
    botonBicho.addEventListener('click', ataqueBicho) 
    let botonHielo = document.getElementById ('boton-hielo')
    botonHielo.addEventListener('click', ataqueHielo) 

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPuchamonJugador() {

    let sectionSeleccionarPuchamon = document.getElementById('seleccionar-puchamon')
    sectionSeleccionarPuchamon.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputPitochu = document.getElementById('Pitochu')
    let inputChorizard = document.getElementById('Chorizard')
    let inputPendertuga = document.getElementById('Pendertuga')
    let inputBaculao = document.getElementById('Baculao')
    let inputMotapod = document.getElementById('Motapod')
    let inputMojonix = document.getElementById('Mojonix')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    let inputHongusaur = document.getElementById('Hongusaur')
    let inputGlaceheart = document.getElementById('Glaceheart')
    let spanPuchamonJugador = document.getElementById('puchamon-jugador')

    alert('Seleccionaste tu puchamon')
    if (inputPitochu.checked == true){
        alert("Has elegido a Pitochu⚡")
        spanPuchamonJugador.innerHTML = 'Pitochu⚡'
    }
    else if (inputChorizard.checked == true) {
        alert("Has elegido a Chorizard🔥")
        spanPuchamonJugador.innerHTML = 'Chorizard🔥'
    }
    else if (inputPendertuga.checked == true) {
        alert("Has elegido a Pendertuga💧")
        spanPuchamonJugador.innerHTML = 'Pendertuga💧'
    }
    else if (inputBaculao.checked == true) {
        alert("Has elegido a Baculao💧")
        spanPuchamonJugador.innerHTML = 'Baculao💧'
    }
    else if (inputMotapod.checked == true) {
        alert("Has elegido a Motapod🐛")
        spanPuchamonJugador.innerHTML = 'Motapod🐛'
    }
    else if (inputMojonix.checked == true) {
        alert("Has elegido a Mojonix🥌")
        spanPuchamonJugador.innerHTML = 'Mojonix🥌'
    }
    else if (inputLangostelvis.checked == true) {
        alert("Has elegido a Langostelvis💧🔥")
        spanPuchamonJugador.innerHTML = 'Langostelvis💧🔥'
    }
    else if (inputTucapalma.checked == true) {
        alert("Has elegido a Tucapalma💧🥌")
        spanPuchamonJugador.innerHTML = 'Tucapalma💧🥌'
    }
    else if (inputPydos.checked == true) {
        alert("Has elegido a Pydos🥌🔥")
        spanPuchamonJugador.innerHTML = 'Pydos🥌🔥'
    }
    else if (inputHongusaur.checked == true) {
        alert("Has elegido a Hongusaur🌱")
        spanPuchamonJugador.innerHTML = 'Hongusaur🌱'    
    }
    else if (inputGlaceheart.checked == true) {
        alert("Has elegido a Glaceheart❄")
        spanPuchamonJugador.innerHTML = 'Glaceheart❄'    
    }
    else {
        alert("No has elegido ningun puchamon🤨")
    }

    seleccionarPuchamonEnemigo()
}

function seleccionarPuchamonEnemigo() {
    let puchamonAleatorio = aleatorio (1,9)
    let spanPuchamonEnemigo = document.getElementById('puchamon-enemigo')

    if (puchamonAleatorio == 1){
        spanPuchamonEnemigo.innerHTML = 'Pitochu⚡' 
    } else if (puchamonAleatorio == 2) {
        spanPuchamonEnemigo.innerHTML = 'Chorizard🔥'
    } else if (puchamonAleatorio == 3) {
        spanPuchamonEnemigo.innerHTML = 'Pendertuga💧'
    } else if (puchamonAleatorio == 4) {
        spanPuchamonEnemigo.innerHTML = 'Baculao💧'
    } else if (puchamonAleatorio == 5) {
        spanPuchamonEnemigo.innerHTML = 'Motapod🐛'
    } else if (puchamonAleatorio == 6) {
        spanPuchamonEnemigo.innerHTML = 'Mojonix🥌'
    } else if (puchamonAleatorio == 7) {
        spanPuchamonEnemigo.innerHTML = 'Langostelvis💧🔥'
    } else if (puchamonAleatorio == 8) {
        spanPuchamonEnemigo.innerHTML = 'Tucapalma💧🥌'
    }else if (puchamonAleatorio == 9) {
        spanPuchamonEnemigo.innerHTML = 'Hongusaur🌱'
    }else if (puchamonAleatorio == 10) {
        spanPuchamonEnemigo.innerHTML = 'Glaceheart❄'
    } else {
         spanPuchamonEnemigo.innerHTML = 'Pydos🥌🔥'
    } 
}

function ataqueRayo() {
    ataqueJugador = 'RAYO⚡'
    ataqueAleatorioEnemigo()
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO🔥'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA💧'
    ataqueAleatorioEnemigo()
}

function ataqueHierva() {
    ataqueJugador = 'HIERVA🌱'
    ataqueAleatorioEnemigo()
}

function ataquePiedra(){
    ataqueJugador = 'PIEDRA🥌'
    ataqueAleatorioEnemigo()
}

function ataqueBicho() {
    ataqueJugador = 'BICHO🐛'
    ataqueAleatorioEnemigo()
}

function ataqueHielo() {
    ataqueJugador = 'HIELO❄'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,5) 

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'RAYO⚡'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'FUEGO🔥'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'AGUA💧'
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = 'HIERVA🌱'
    }else if (ataqueAleatorio == 5) {
        ataqueEnemigo = 'BICHO🐛'
    }else if (ataqueAleatorio == 6) {
        ataqueEnemigo = 'HIELO❄'
    }else {
        ataqueEnemigo = 'PIEDRA🥌'
    }

    combate()
}

//combate

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE😐");
    } else if(ataqueJugador == 'RAYO⚡' && ataqueEnemigo == 'AGUA💧' || ataqueJugador == 'RAYO⚡' && ataqueEnemigo == 'FUEGO🔥' || ataqueJugador == 'RAYO⚡' && ataqueEnemigo == 'HIERVA🌱'|| ataqueJugador == 'RAYO⚡' && ataqueEnemigo == 'BICHO🐛' || ataqueJugador == 'RAYO⚡' && ataqueEnemigo == 'HIELO❄' || ataqueJugador == 'AGUA💧' && ataqueEnemigo == 'FUEGO🔥' || ataqueJugador == 'AGUA💧' && ataqueEnemigo == 'PIEDRA🥌' || ataqueJugador == 'FUEGO🔥' && ataqueEnemigo == 'HIERVA🌱' || ataqueJugador == 'FUEGO🔥' && ataqueEnemigo == 'BICHO🐛' || ataqueJugador == 'FUEGO🔥' && ataqueEnemigo == 'HIELO❄' || ataqueJugador == 'HIERVA🌱' && ataqueEnemigo == 'PIEDRA🥌' || ataqueJugador == 'HIERVA🌱' && ataqueEnemigo == 'AGUA💧' || ataqueJugador == 'PIEDRA🥌' && ataqueEnemigo == 'RAYO⚡' || ataqueJugador == 'PIEDRA🥌' && ataqueEnemigo == 'FUEGO🔥'|| ataqueJugador == 'PIEDRA🥌' && ataqueEnemigo == 'BICHO🐛' || ataqueJugador == 'PIEDRA🥌' && ataqueEnemigo == 'HIELO❄' || ataqueJugador == 'BICHO🐛' && ataqueEnemigo == 'HIERVA🌱' || ataqueJugador == 'BICHO🐛' && ataqueEnemigo == 'AGUA💧' || ataqueJugador == 'HIELO❄' && ataqueEnemigo == 'HIERVA🌱' || ataqueJugador == 'HIELO❄' && ataqueEnemigo == 'AGUA💧' || ataqueJugador == 'HIELO❄' && ataqueEnemigo == 'BICHO🐛') {
        crearMensaje("GANASTE🎉");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje ("PERDISTE😔")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones! haz ganado🎉😊")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo lamento, haz perdido😔")
    } 
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu puchamnon ataco con ' + ataqueJugador + ', el puchamon enemigo ataco con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonRayo = document.getElementById ('boton-rayo')
    botonRayo.disabled = true
    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById ('boton-agua')
    botonAgua.disabled = true
    let botonHierva = document.getElementById ('boton-hierva')
    botonHierva.disabled = true
    let botonPiedra = document.getElementById ('boton-piedra')
    botonPiedra.disabled = true
    let botonBicho = document.getElementById ('boton-bicho')
    botonBicho.disabled = true
    let botonHielo = document.getElementById ('boton-hielo')
    botonHielo.disabled = true
    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'


} 

function reiniciarJuego(){
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)