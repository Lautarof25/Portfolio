let countClicks = 0
const clickHandler = () =>{
  countClicks++
  if (countClicks === 10) {
    allExceptShareButton.forEach((element) => {
      addBlurEffect(element,1)
    })
    openPopUp(1)

    // Eliminar el event listener después de alcanzar la condición
    document.removeEventListener('click', clickHandler)
  }
}

document.addEventListener('click', clickHandler)

const removeBlurAndClosePopUp = () => {
  closeButton.addEventListener('click', () => {
    allExceptShareButton.forEach(element => {
      element.classList.remove('blur-effect')
    })
    openPopUp(0)
    bgDisable(0)
  })
}

const addBlurEffect = (element,mode) => {
  mode === 1 ? element.classList.add("blur-effect") 
             : element.classList.remove("blur-effect")
}

const openPopUp = (mode) => {
  mode === 1 ? containerShareButtons.classList.remove("hidden") 
             : containerShareButtons.classList.add("hidden")
  bgDisable(1)
}

removeBlurAndClosePopUp()

const shareSocials = () => {
  shareButtons.forEach(button => {
    button.addEventListener('click', function () {
      const shareURL = 'https://lautarof25.github.io/Portfolio/'
  
      function shareOnFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareURL)
      }
  
      function shareOnTwitter() {
        window.open('https://twitter.com/intent/tweet?url=' + shareURL)
      }
  
      function shareOnLinkedIn() {
        window.open('https://www.linkedin.com/shareArticle?url=' + shareURL)
      }
  
      function shareOnWhatsApp() {
        window.open('https://api.whatsapp.com/send?text=' + shareURL)
      }
  
      // Call the specific share function based on the clicked button
      switch (true) {
        case button.classList.contains('facebook'):
          shareOnFacebook()
          break
        case button.classList.contains('twitter'):
          shareOnTwitter()
          break
        case button.classList.contains('linkedin'):
          shareOnLinkedIn()
          break
        case button.classList.contains('whatsapp'):
          shareOnWhatsApp()
          break
      }
    })
  })
}
shareSocials()

const clickShareButton = () => {
  share.addEventListener('click', () => {
    allExceptShareButton.forEach((element) => {
      addBlurEffect(element,1)
    })
    openPopUp(1)
  })
}

clickShareButton()