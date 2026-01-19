const addCardInfo = (type, database) => {
    const container = getContainerByType(type);
    
    // Cachear elementos empty una sola vez para evitar múltiples querySelector
    let projectsEmpty = null
    let certificatesEmpty = null
    if (type === 'projects') projectsEmpty = projects.querySelector('.empty')
    if (type === 'certificates') certificatesEmpty = certificates.querySelector('.empty')

    database.forEach(item => {
        switch (type) {
            case 'about':
                createCardAboutInfo(item.description, item.descriptionHidden, item.icons)
                break
            case 'projects':
                if(checkboxesProjectsYearsChecked.includes(item.date.slice(0,4))){
                    createCardProjectInfo(item.title, item.date, item.description, item.languages, item.thumbnail, item.github, item.webpage)
                    if (projectsEmpty) projectsEmpty.classList.add('hidden')
                }
                break
            case 'certificates':
                if(checkboxesCertificatesYearsChecked.includes(item.year) && checkboxesCertificatesCategoriesChecked.includes(item.category.substring(0,3))){
                    createCardCertificatesInfo(item.title, item.institution, item.thumbnail,item.category, item.hours, item.year, item.link)
                    if (certificatesEmpty) certificatesEmpty.classList.add('hidden')
                }
                break
            case 'services':
                createCardServicesInfo(item.title, item.description,item.details, item.icons)
                break
        }
    })
    
    // Actualizar empty solo una vez después del loop
    if (type === 'projects' && projectsEmpty) {
        if (checkboxesProjectsYearsChecked.length === 0) {
            projectsEmpty.classList.remove('hidden')
        }
    }
    if (type === 'certificates' && certificatesEmpty) {
        if (checkboxesCertificatesYearsChecked.length === 0) {
            certificatesEmpty.classList.remove('hidden')
        }
    }
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