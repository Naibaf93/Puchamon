function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion (jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "piedra 🥌"
    } else if (jugada == 2){
        resultado = "papel 🧻"
    } else if (jugada == 3) {
        resultado = "tijera ✂"
    } else {
        resultado = "Mala eleccion😔"
    }
    return resultado

}
// 1 es papel, 2 es papel, 3 es tijera
let jugador = 0
let min = 1
let max = 3
let pc = 0
let triunfos = 0
let perdidas = 0


while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio (1,3)
    jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("elegiste " + jugador)
    
    alert("PC elige: " + eleccion(pc))
    alert("tu eliges: " + eleccion(jugador))     

    // combate

    if (pc == jugador){
        alert("empate😲")
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        alert("ganaste😊")
        triunfos = triunfos + 1
    }else {
        alert("perdiste😔")
        perdidas = perdidas + 1
    } 
}

alert ("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
