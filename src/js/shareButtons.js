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

// Add click event listener to each button
shareButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the URL of the current page
        const url = window.location.href;

        // Get the social media platform from the button's class name
        const platform = button.classList[1];

        // Set the URL to share based on the social media platform
        let shareUrl;
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}&text=Me gustó esta página`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=Me gustó esta página`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
                break;
        }

        // Open a new window to share the URL
        window.open(shareUrl, '_blank');
    });
});