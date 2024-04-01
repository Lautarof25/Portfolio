const addCardInfo = (type, database) => {
    const container = getContainerByType(type);

    database.forEach(item => {
        switch (type) {
            case 'about':
                createCardAboutInfo(item.description, item.descriptionHidden, item.icons)
                break
            case 'projects':
                if(checkboxesProjectsYearsChecked.includes(item.date.slice(0,4))){
                    createCardProjectInfo(item.title, item.date, item.description, item.languages, item.thumbnail, item.github, item.webpage)
                    projects.querySelector('.empty').classList.add('hidden')
                }if (checkboxesProjectsYearsChecked.length === 0){
                    projects.querySelector('.empty').classList.remove('hidden')
                }
                break
            case 'certificates':
                if(checkboxesCertificatesYearsChecked.includes(item.year)){
                    createCardCertificatesInfo(item.title, item.institution, item.thumbnail,item.category, item.hours, item.year, item.link)
                    certificates.querySelector('.empty').classList.add('hidden')
                }
                if (checkboxesCertificatesYearsChecked.length === 0){
                    certificates.querySelector('.empty').classList.remove('hidden')
                }
                break
            case 'services':
                createCardServicesInfo(item.title, item.description,item.details, item.icons)
                break
        }
    })
}

const getContainerByType = (type) => {
    switch (type) {
        case 'about':
            return about
        case 'projects':
            return projects
        case 'certificates':
            return certificates
        case 'services':
            return services
        default:
            throw new Error(`Unknown card type: ${type}`)
    }
}
addCardInfo('about', aboutInfo.info)
addCardInfo('projects', projectsInfo.info)
addCardInfo('certificates', certificatesInfo.info)
addCardInfo('services', servicesInfo.info)