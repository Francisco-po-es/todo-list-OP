// Save projects array with its objects in local storage
export function saveData(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function deleteProject(projects, id) {
    // We try to find project's index. If false, index = -1
    const index = projects.findIndex((project) => project.id === id);
    if (index !== -1) {
        projects.splice(index, 1);
    }
}