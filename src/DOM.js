let listProjects = document.getElementById('displayedProjects');
let todosList = document.getElementById('todosList');

export function displayProjects(project) {
    let newProject = document.createElement('li');
    newProject.classList.add('project-item');
    newProject.dataset.id = project.id;
    newProject.textContent = `${project.name}`;
    listProjects.appendChild(newProject);
}

export function addProjectstoAside(array) {
    if (array.length >= 1) {
        listProjects.innerHTML = '';
        array.forEach((project) => displayProjects(project));
    } else {
        todosList.innerHTML = `There's no projects in here.`;
    }
}