const n = 50;
const memo = new Array(n + 1).fill(-1);

function subirEscalera(n)
{
    if(n ===1)
        return 1;
    if(n===2)
        return 2;

    if (memo[n] !== -1)
        return memo[n];

    return memo[n] = subirEscalera(n-1) +subirEscalera(n-2)
}

document.addEventListener('DOMContentLoaded', function() {
    
    const inicio = performance.now();

    // Llama a la función que deseas medir
    const res = subirEscalera(n);

    // Marca de tiempo final
    const fin = performance.now();

    console.log(res + " formas de subir una escalera de " + n +" escalones")
    const tiempoTranscurrido = fin - inicio;
    console.log('La función tardó ' + tiempoTranscurrido + ' milisegundos en ejecutarse.');
});


