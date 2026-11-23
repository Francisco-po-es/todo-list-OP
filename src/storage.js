// Save projects array with its objects in local storage
export function saveProject(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function deleteProject(id) {
    let storeProjects = localStorage.getItem('projects');
    if (storeProjects) {
        const projectsList = JSON.parse(storeProjects);
        const newProjectsList = projectsList.filter( project => project.id != id);
        saveProject(newProjectsList);
    } else {
        throw new Error('Sorry, this list does not exist.')
    }
}