// Escribe tu código aquí:
function ContadorClosures(){


    let contador=0

    return function(){
        contador++
        return contador
    }
}

const incrementar = contadorClosoures()

console.log(incrementar())
console.log(incrementar())