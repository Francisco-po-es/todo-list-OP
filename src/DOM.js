let listProjects = document.getElementById('displayedProjects');
let todosList = document.getElementById('todosList');

export function displayProjects(project, currentProject, onSelectProject) {
    let newProject = document.createElement('li');
    newProject.classList.add('project-item');
    if (currentProject && project.id === currentProject.id) {
        newProject.classList.add('active-project');
    }
    newProject.dataset.id = project.id;
    newProject.textContent = `${project.name}`;

    newProject.addEventListener('click', () => {
        onSelectProject(project);
    });

    listProjects.appendChild(newProject);
}

export function addProjectstoAside(array, currentProject, onSelectProject) {
    if (array.length >= 1) {
        listProjects.innerHTML = '';
        array.forEach((project) => displayProjects(project, currentProject, onSelectProject));
    } else {
        todosList.innerHTML = `There's no projects in here.`;
    }
}

export function displayTodos(project) {
    todosList.innerHTML = '';

    let header = document.createElement('h2');
    header.textContent = project.name;
    todosList.appendChild(header);

    if (project.todos.length === 0) {
        let emptyMsg = document.createElement('p');
        emptyMsg.textContent = 'No todos in this project yet.';
        todosList.appendChild(emptyMsg);
        return;
    }

    project.todos.forEach((todo) => {
        let todoCard = document.createElement('div');
        todoCard.classList.add('todo', `priority-${todo.priority}`);
        todoCard.dataset.id = todo.id;

        let todoInfo = document.createElement('div');
        todoInfo.classList.add('todo-header');

        let title = document.createElement('span');
        title.classList.add('todo-title');
        title.textContent = todo.title;

        let date = document.createElement('span');
        date.classList.add('todo-date');
        date.textContent = todo.dueDate;

        todoInfo.appendChild(title);
        todoInfo.appendChild(date);
        todoCard.appendChild(todoInfo);
        todosList.appendChild(todoCard);
    });
}