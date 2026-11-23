// Save projects array with its objects in local storage
export function saveProject(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}