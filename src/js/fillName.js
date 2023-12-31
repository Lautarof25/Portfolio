document.addEventListener('DOMContentLoaded', function () {
    var words = ['Lautaro', 'Exequiel', 'Fernández'];
    var index = 0;
    var currentLetter = 0;
    var direction = 1; // 1 para escribir, -1 para borrar
    var speedWriting = 250; // milisegundos por letra
    var speedChangeWords = 1000; // milisegundos entre cambios de palabra

    function writeDeleteWords() {
      var currentWord = words[index];
      var element = document.querySelector('.nameChange');

      if (direction === 1) {
        element.textContent = currentWord.substring(0, currentLetter);
        currentLetter++;
        if (currentLetter > currentWord.length) {
          direction = -1;
          setTimeout(writeDeleteWords, speedChangeWords);
        } else {
          setTimeout(writeDeleteWords, speedWriting);
        }
      } else {
        element.textContent = currentWord.substring(0, currentLetter);
        currentLetter--;
        if (currentLetter === 0) {
          direction = 1;
          index = (index + 1) % words.length;
          setTimeout(writeDeleteWords, speedChangeWords);
        } else {
          setTimeout(writeDeleteWords, speedWriting / 2);
        }
      }
    }

    writeDeleteWords(); // Iniciar el efecto al cargar la página
})