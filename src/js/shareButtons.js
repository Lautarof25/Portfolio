let countClicks = 0

addEventListener('click', function () {
    countClicks++
    if (countClicks === 10) {
        allExceptShareButton.forEach(element => {
          element.classList.add('blur-effect')
        })
        containerShareButtons.classList.remove("hidden")
    }
})

closeButton.addEventListener('click', function () {
    allExceptShareButton.forEach(element => {
      element.classList.remove('blur-effect')
    });
    containerShareButtons.classList.add("hidden")
});

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
    switch(true) {
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
      default:
    }
  })
})
