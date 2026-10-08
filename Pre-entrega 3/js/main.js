const limiteFuerte = 70
const limiteMedio = 45

const clasificarWinrate = winrate =>
    winrate > limiteFuerte ? "fuerte" :
    winrate >= limiteMedio ? "medio" :
    "débil"

function obtenerDatosPersonaje(opcion) {
    let personaje = ""
    let winrate = 0
     switch (opcion) {
        case 1:
            personaje = "Ramlehtal valentine"
            winrate = 75
            break
        case 2:
            personaje = "I-no"
            winrate = 35
            break
        case 3:
            personaje = "Sol badguy"
            winrate = 58
            break
        case 4:
            personaje = "Ky Kiske"
            winrate = 42
            break
        case 5:
            personaje = "Potemkin"
            winrate = 66
            break
        default:
            return null
    }

    return { personaje, winrate }
}

let opcion = 0 

function mostrarResultado(personaje, winrate, clasificacion) {
    const mensaje = "El winrate de " + personaje + " es: " + winrate + "%, es un personaje " + clasificacion
    alert(mensaje)
    console.log(mensaje)
}
const solicitarOpcion = function(mensaje) {
    return Number(prompt(mensaje))
}
while (opcion !== 6) { 
    opcion = solicitarOpcion(
        "----- Winrate de personajes del Guilty Gear -----\n" +
        "1. Ramlehtal valentine\n" +
        "2. I-no\n" +
        "3. Sol badguy\n" +
        "4. Ky Kiske\n" +
        "5. Potemkin\n" +
        "6. Salir"
        + "\nelige una opción"
    
    )
    if (opcion === 6) {
        alert("Gracias por usar el programa")
        break
    }

    const datos = obtenerDatosPersonaje(opcion)

    if (datos === null) {
        alert("Opción inválida, por favor elige una opción del 1 al 6")
        continue
    }

    const clasificacion = clasificarWinrate(datos.winrate)
    mostrarResultado(datos.personaje, datos.winrate, clasificacion)
}