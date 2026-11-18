import { getPriorityName } from './tools.js';

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

export function displayTodos(project, onToggleTodo, onDeleteTodo, onEditTodo) {
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
        if (todo.status) {
            todoCard.classList.add('completed');
        }
        todoCard.dataset.id = todo.id;

        let todoInfo = document.createElement('div');
        todoInfo.classList.add('todo-header');

        let leftGroup = document.createElement('div');
        leftGroup.classList.add('todo-left');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.status;
        checkbox.addEventListener('change', () => {
            onToggleTodo(todo);
        });

        let title = document.createElement('span');
        title.classList.add('todo-title');
        title.textContent = todo.title;

        leftGroup.appendChild(checkbox);
        leftGroup.appendChild(title);

        let rightGroup = document.createElement('div');
        rightGroup.classList.add('todo-actions');

        let date = document.createElement('span');
        date.classList.add('todo-date');
        date.textContent = todo.dueDate;

        let detailsDiv = document.createElement('div');
        detailsDiv.classList.add('todo-details', 'hidden');

        let descP = document.createElement('p');
        descP.textContent = `Description: ${todo.description || 'No description provided.'}`;

        let priorityP = document.createElement('p');
        priorityP.textContent = `Priority: ${getPriorityName(todo.priority)}`;

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            onEditTodo(todo);
        });

        detailsDiv.appendChild(descP);
        detailsDiv.appendChild(priorityP);
        detailsDiv.appendChild(editBtn);

        let expandBtn = document.createElement('button');
        expandBtn.textContent = 'Details';
        expandBtn.addEventListener('click', () => {
            detailsDiv.classList.toggle('hidden');
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', () => {
            onDeleteTodo(todo.id);
        });

        rightGroup.appendChild(date);
        rightGroup.appendChild(expandBtn);
        rightGroup.appendChild(deleteBtn);

        todoInfo.appendChild(leftGroup);
        todoInfo.appendChild(rightGroup);
        todoCard.appendChild(todoInfo);
        todoCard.appendChild(detailsDiv);
        todosList.appendChild(todoCard);
    });
}