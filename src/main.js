import "./styles.css";
import { PROJECT } from './project.js';
import { TODO } from './todo.js';
import { addressProject, getProject, addSelect, getPriority } from './tools.js';
import { addProjectstoAside, displayTodos } from './DOM.js';

let defaultProject = new PROJECT('Default');
const projects = [defaultProject];
let currentProject = defaultProject;

let todoDialog = document.getElementById('dialogTodo');
let projectDialog = document.getElementById('dialogProject');

let projectForm = document.querySelector('#dialogProject > form');
let todoForm = document.querySelector('#dialogTodo > form');

let addProject = document.getElementById('addProject');
let cancelProject = document.getElementById('cancelProject');

let titleProject = document.getElementById('inputTitlePJ');

let titleTodo = document.getElementById('inputTitleTD');
let descTodo = document.getElementById('inputDesc');
let dateTodo = document.getElementById('inputDate');
let selectTodo = document.getElementById('selectProject');
let priorityTodo = document.getElementsByName('priority');

let addTodo = document.getElementById('addTodo');
let cancelTodo = document.getElementById('cancelTodo');

function handleSelectProject(project) {
    currentProject = project;
    addProjectstoAside(projects, currentProject, handleSelectProject);
    displayTodos(currentProject);
}

function main() {
    addProjectstoAside(projects, currentProject, handleSelectProject);
    displayTodos(currentProject);

    addProject.addEventListener('click', () => {
        projectDialog.showModal();
    });
    addTodo.addEventListener('click', () => {
        addSelect(projects, selectTodo);
        selectTodo.value = currentProject.name;
        todoDialog.showModal();
    });

    cancelTodo.addEventListener('click', () => {
        todoDialog.close();
    });
    cancelProject.addEventListener('click', () => {
        projectDialog.close();
    });

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newProj = new PROJECT(titleProject.value);
        projects.push(newProj);
        currentProject = newProj;
        addProjectstoAside(projects, currentProject, handleSelectProject);
        displayTodos(currentProject);
        titleProject.value = '';
        projectDialog.close();
    });

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!(projects.find((project) => project.name === 'Default'))) {
            defaultProject = new PROJECT('Default');
            projects.push(defaultProject);
        }
        let targetProject = getProject(selectTodo.value, projects);
        addressProject(
            new TODO(titleTodo.value, descTodo.value, dateTodo.value, getPriority(priorityTodo)),
            targetProject,
            defaultProject
        );
        currentProject = targetProject || defaultProject;
        addProjectstoAside(projects, currentProject, handleSelectProject);
        displayTodos(currentProject);
        todoForm.reset();
        todoDialog.close();
    });
}

main();