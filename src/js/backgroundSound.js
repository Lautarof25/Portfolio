document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio")
    audio.volume = 0.2
    audio.autoplay = true
    audio.load()

    const playButton = document.querySelector(".sound")

    playButton.addEventListener("click", function() {
      if (audio.paused) {
          audio.play()
          playButton.textContent = "►"
      } else {
          audio.pause()
        playButton.textContent = "||"
      }
  })
})