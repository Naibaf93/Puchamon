alert("Bienvenid@ maestr@ puchamon 😊")

let ataqueJugador
let ataqueEnemigo

function iniciarJuego () {
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
    
}

function seleccionarPuchamonJugador() {
    let inputPitochu = document.getElementById('Pitochu')
    let inputChorizard = document.getElementById('Chorizard')
    let inputPendertuga = document.getElementById('Pendertuga')
    let inputBaculao = document.getElementById('Baculao')
    let inputMotapod = document.getElementById('Motapod')
    let inputMojonix = document.getElementById('Mojonix')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
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
        alert("Has elegido a Motapod🌱")
        spanPuchamonJugador.innerHTML = 'Motapod🌱'
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
    } else {
        alert("No has elegido ningun puchamon🤨")
    }

    seleccionarPuchamonEnemigo()
}

function seleccionarPuchamonEnemigo() {
    let puchamonAleatorio = aleatorio (1,9)
    let spanPuchamonEnemigo = document.getElementById('puchamon-enemigo')

    if (puchamonAleatorio == 1){
        spanPuchamonEnemigo.innerHTML = 'Pitochu' 
    } else if (puchamonAleatorio == 2) {
        spanPuchamonEnemigo.innerHTML = 'Chorizard'
    } else if (puchamonAleatorio == 3) {
        spanPuchamonEnemigo.innerHTML = 'Pendertuga'
    } else if (puchamonAleatorio == 4) {
        spanPuchamonEnemigo.innerHTML = 'Baculao'
    } else if (puchamonAleatorio == 5) {
        spanPuchamonEnemigo.innerHTML = 'Motapod'
    } else if (puchamonAleatorio == 6) {
        spanPuchamonEnemigo.innerHTML = 'Mojonix'
    } else if (puchamonAleatorio == 7) {
        spanPuchamonEnemigo.innerHTML = 'Langostelvis'
    } else if (puchamonAleatorio == 8) {
        spanPuchamonEnemigo.innerHTML = 'Tucapalma'
    } else {
         spanPuchamonEnemigo.innerHTML = 'Pydos'
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
    } else {
        ataqueEnemigo = 'PIEDRA🥌'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)