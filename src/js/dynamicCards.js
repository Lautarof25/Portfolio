function addCardInfo(type, database) {
    const container = getContainerByType(type);

    database.forEach(item => {
        switch (type) {
            case 'portfolio':
                createCardPortfolioInfo(item.title, item.description, item.languages, item.thumbnail, item.github, item.webpage);
                break
            case 'services':
                createCardServicesInfo(item.title, item.description, item.icons)
                break
            case 'certificates':
                createCardCertificatesInfo(item.title, item.description, item.thumbnail, item.hours, item.year, item.link)
                break
            case 'about':
                createCardAboutInfo(item.description, item.icons)
                break
        }
    })
}

function getContainerByType(type) {
    switch (type) {
        case 'portfolio':
            return portfolio
        case 'services':
            return services
        case 'certificates':
            return certificates
        case 'about':
            return about
        default:
            throw new Error(`Unknown card type: ${type}`)
    }
}
addCardInfo('portfolio', databasePortfolio)
addCardInfo('services', databaseServices)
addCardInfo('certificates', databaseCertificates)
addCardInfo('about', databaseAbout)    