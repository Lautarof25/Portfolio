document.addEventListener('DOMContentLoaded', function () {
  let words = ['Lautaro', 'Exequiel', 'Fernández']
  let index = 0
  let currentLetter = 0
  let direction = 1
  let speedWriting = 250 // milisegundos por letra
  let speedChangeWords = 1000 // milisegundos entre cambios de palabra

  function writeDeleteWords() {
      let currentWord = words[index]
      let element = $('.nameChange')

      if (direction === 1) {
          element.innerHTML = currentWord.substring(0, currentLetter) + '<span class="blinking-cursor">|</span>'
          currentLetter++
          if (currentLetter > currentWord.length) {
              direction = -1
              setTimeout(writeDeleteWords, speedChangeWords)
          } else {
              setTimeout(writeDeleteWords, speedWriting)
          }
      } else {
          element.innerHTML = currentWord.substring(0, currentLetter) + '<span class="blinking-cursor">|</span>'
          currentLetter--
          if (currentLetter === 0) {
              direction = 1
              index = (index + 1) % words.length
              setTimeout(writeDeleteWords, speedChangeWords)
          } else {
              setTimeout(writeDeleteWords, speedWriting / 2)
          }
      }
  }

  writeDeleteWords()
})