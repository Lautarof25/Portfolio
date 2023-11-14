let countClicks = 0

addEventListener('click', function () {
    countClicks++
    if (countClicks === 5) {
        header.classList.add('blur-effect')
        nav.classList.add('blur-effect')
        footer.classList.add('blur-effect')
        main.classList.add('blur-effect')
        titlePage.classList.add('blur-effect')
        buttonDown.classList.add('blur-effect')
        buttonUp.classList.add('blur-effect')
        containerButton.classList.remove("hidden")
    }
})

closeButton.addEventListener('click', function () {
    containerButton.classList.add('hidden')
    header.classList.remove('blur-effect')
    nav.classList.remove('blur-effect')
    footer.classList.remove('blur-effect')
    main.classList.remove('blur-effect')
    titlePage.classList.remove('blur-effect')
    buttonDown.classList.remove('blur-effect')
    buttonUp.classList.remove('blur-effect')
});

shareButtons.forEach(button => {
  button.addEventListener('click', function () {
    const shareURL = 'https://lautarof25.github.io/Portfolio/';

    function shareOnFacebook() {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareURL);
    }

    function shareOnTwitter() {
      window.open('https://twitter.com/intent/tweet?url=' + shareURL);
    }

    function shareOnLinkedIn() {
      window.open('https://www.linkedin.com/shareArticle?url=' + shareURL);
    }

    function shareOnWhatsApp() {
      window.open('https://api.whatsapp.com/send?text=' + shareURL);
    }

    // Call the specific share function based on the clicked button
    if (button.classList.contains('facebook')) {
      shareOnFacebook();
    } else if (button.classList.contains('twitter')) {
      shareOnTwitter();
    } else if (button.classList.contains('linkedin')) {
      shareOnLinkedIn();
    } else if (button.classList.contains('whatsapp')) {
      shareOnWhatsApp();
    }
  });
});
