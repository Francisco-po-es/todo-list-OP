import "./styles.css";
import { PROJECT } from './project.js';
import { TODO } from './todo.js';
import { addressProject, getPriority } from './tools.js';
import { addProjectstoAside, displayTodos } from './dom.js';

let defaultProject = new PROJECT('Default');
const projects = [defaultProject];
let currentProject = defaultProject;
let todoBeingEdited = null;

let todoDialog = document.getElementById('dialogTodo');
let projectDialog = document.getElementById('dialogProject');
let editTodoDialog = document.getElementById('dialogEditTodo');

let projectForm = document.querySelector('#dialogProject > form');
let todoForm = document.querySelector('#dialogTodo > form');
let editTodoForm = document.querySelector('#dialogEditTodo > form');

let addProject = document.getElementById('addProject');
let cancelProject = document.getElementById('cancelProject');

let titleProject = document.getElementById('inputTitlePJ');

let titleTodo = document.getElementById('inputTitleTD');
let descTodo = document.getElementById('inputDesc');
let dateTodo = document.getElementById('inputDate');
let priorityTodo = document.getElementsByName('priority');

let editTitleTodo = document.getElementById('editTitleTD');
let editDescTodo = document.getElementById('editDesc');
let editDateTodo = document.getElementById('editDate');
let editPriorityTodo = document.getElementsByName('editPriority');
let cancelEditTodo = document.getElementById('cancelEditTodo');

let addTodo = document.getElementById('addTodo');
let cancelTodo = document.getElementById('cancelTodo');

function handleToggleTodo(todo) {
    todo.toggleStatus();
    renderCurrentTodos();
}

function handleDeleteTodo(todoId) {
    currentProject.removeTodo(todoId);
    renderCurrentTodos();
}

function handleEditTodo(todo) {
    todoBeingEdited = todo;
    editTitleTodo.value = todo.title;
    editDescTodo.value = todo.description;
    editDateTodo.value = todo.dueDate;
    for (let i = 0; i < editPriorityTodo.length; i++) {
        editPriorityTodo[i].checked = parseInt(editPriorityTodo[i].value) === todo.priority;
    }
    editTodoDialog.showModal();
}

function renderCurrentTodos() {
    displayTodos(currentProject, handleToggleTodo, handleDeleteTodo, handleEditTodo);
}

function handleSelectProject(project) {
    currentProject = project;
    addProjectstoAside(projects, currentProject, handleSelectProject);
    renderCurrentTodos();
}

function main() {
    addProjectstoAside(projects, currentProject, handleSelectProject);
    renderCurrentTodos();

    addProject.addEventListener('click', () => {
        projectDialog.showModal();
    });
    addTodo.addEventListener('click', () => {
        todoDialog.showModal();
    });

    cancelTodo.addEventListener('click', () => {
        todoDialog.close();
    });
    cancelProject.addEventListener('click', () => {
        projectDialog.close();
    });
    cancelEditTodo.addEventListener('click', () => {
        editTodoDialog.close();
    });

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newProj = new PROJECT(titleProject.value);
        projects.push(newProj);
        currentProject = newProj;
        addProjectstoAside(projects, currentProject, handleSelectProject);
        renderCurrentTodos();
        titleProject.value = '';
        projectDialog.close();
    });

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!(projects.find((project) => project.name === 'Default'))) {
            defaultProject = new PROJECT('Default');
            projects.push(defaultProject);
        }
        addressProject(
            new TODO(titleTodo.value, descTodo.value, dateTodo.value, getPriority(priorityTodo)),
            currentProject,
            defaultProject
        );
        renderCurrentTodos();
        todoForm.reset();
        todoDialog.close();
    });

    editTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (todoBeingEdited) {
            todoBeingEdited.setTitle(editTitleTodo.value);
            todoBeingEdited.setDescription(editDescTodo.value);
            todoBeingEdited.setDueDate(editDateTodo.value);
            todoBeingEdited.setPriority(getPriority(editPriorityTodo));
            renderCurrentTodos();
            todoBeingEdited = null;
        }
        editTodoDialog.close();
    });
}

main();