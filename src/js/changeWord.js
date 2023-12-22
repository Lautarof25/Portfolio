document.addEventListener('DOMContentLoaded', function () {
    var palabras = ['Lautaro', 'Exequiel', 'Fernández'];
    var indice = 0;
    var letraActual = 0;
    var direccion = 1; // 1 para escribir, -1 para borrar
    var velocidadEscritura = 250; // milisegundos por letra
    var velocidadCambioPalabra = 1000; // milisegundos entre cambios de palabra

    function escribirBorrar() {
      var palabraActual = palabras[indice];
      var elemento = document.querySelector('.nameChange');

      if (direccion === 1) {
        elemento.textContent = palabraActual.substring(0, letraActual);
        letraActual++;
        if (letraActual > palabraActual.length) {
          direccion = -1;
          setTimeout(escribirBorrar, velocidadCambioPalabra);
        } else {
          setTimeout(escribirBorrar, velocidadEscritura);
        }
      } else {
        elemento.textContent = palabraActual.substring(0, letraActual);
        letraActual--;
        if (letraActual === 0) {
          direccion = 1;
          indice = (indice + 1) % palabras.length;
          setTimeout(escribirBorrar, velocidadCambioPalabra);
        } else {
          setTimeout(escribirBorrar, velocidadEscritura / 2);
        }
      }
    }

    escribirBorrar(); // Iniciar el efecto al cargar la página
})