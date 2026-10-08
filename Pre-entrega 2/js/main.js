const limiteFuerte = 70
const limiteMedio = 45
let opcion = 0 
while (opcion !== 6) {
    opcion = prompt(
        "----- Winrate de personajes del Guilty Gear -----\n" +
        "1. Ramlehtal valentine\n" +
        "2. I-no\n" +
        "3. Sol badguy\n" +
        "4. Ky Kiske\n" +
        "5. Potemkin\n" +
        "6. Salir"
        + "\nelige una opción"
    
    )
         opcion = Number(opcion)

        let winrate = 0
        let personaje = ""

        switch (opcion) {
            case 1:
                winrate = 75
                personaje = "Ramlehtal valentine"
                break;
            case 2:
                winrate = 35
                personaje = "I-no"
                break;
            case 3:
                winrate = 58
                personaje = "Sol badguy"
                break;
            case 4:
                winrate = 42
                personaje = "Ky Kiske"
                break;
            case 5:
                winrate = 66
                personaje = "Potemkin"
                break;
            case 6:
                alert("Gracias por usar el programa")
                break;
            default:
                alert("Opción inválida, por favor elige una opción del 1 al 6")
                break;
        }
        if (opcion >= 1 && opcion <= 5) {

        if (winrate > limiteFuerte) {
            alert("El winrate de " + personaje + " es: " + winrate + "%, es un personaje fuerte")
        } else if (winrate >= limiteMedio) {
            alert("El winrate de " + personaje + " es: " + winrate + "%, es un personaje medio")
        } else {
                alert("El winrate de " + personaje + " es: " + winrate + "%, es un personaje débil")
            }   

        }
    }