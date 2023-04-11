alert("Bienvenid@ maestr@ puchamon 😊")

let ataqueJugador

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
    let ataqueAleatorio = aleatorio (1,9)
    let spanPuchamonEnemigo = document.getElementById('puchamon-enemigo')

    if (ataqueAleatorio == 1){
        spanPuchamonEnemigo.innerHTML = 'Pitochu' 
    } else if (ataqueAleatorio == 2) {
        spanPuchamonEnemigo.innerHTML = 'Chorizard'
    } else if (ataqueAleatorio == 3) {
        spanPuchamonEnemigo.innerHTML = 'Pendertuga'
    } else if (ataqueAleatorio == 4) {
        spanPuchamonEnemigo.innerHTML = 'Baculao'
    } else if (ataqueAleatorio == 5) {
        spanPuchamonEnemigo.innerHTML = 'Motapod'
    } else if (ataqueAleatorio == 6) {
        spanPuchamonEnemigo.innerHTML = 'Mojonix'
    } else if (ataqueAleatorio == 7) {
        spanPuchamonEnemigo.innerHTML = 'Langostelvis'
    } else if (ataqueAleatorio == 8) {
        spanPuchamonEnemigo.innerHTML = 'Tucapalma'
    } else {
         spanPuchamonEnemigo.innerHTML = 'Pydos'
    } 
}

function ataqueRayo() {
    ataqueJugador = 'RAYO⚡'
    alert(ataqueJugador)
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO🔥'
    alert(ataqueJugador)
}

function ataqueAgua() {
    ataqueJugador = 'AGUA💧'
    alert(ataqueJugador)
}

function ataqueHierva() {
    ataqueJugador = 'HIERVA🌱'
    alert(ataqueJugador)
}

function ataquePiedra(){
    ataqueJugador = 'PIEDRA🥌'
    alert(ataqueJugador)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)