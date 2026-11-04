import { PROJECT } from './project.js';
import {TODO} from './todo.js';
import { addressProject, getProject, addSelect, getPriority } from './tools.js';

let defaultProject = new PROJECT('Default')
const projects = [defaultProject];


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

(function () {
    addProject.addEventListener('click', () => {
        projectDialog.showModal();
    })
    addTodo.addEventListener('click', () => {
        addSelect(projects, selectTodo);
        todoDialog.showModal();
    })

    cancelTodo.addEventListener('click', () => {
        todoDialog.close();
    })
    cancelProject.addEventListener('click', () => {
        projectDialog.close();
    })

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        projects.push(new PROJECT(titleProject.value));
        console.log(projects);
        titleProject.value = '';
        projectDialog.close();
    })

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!(projects.find((project) => project.name === 'Default'))) {
            projects.push(defaultProject);
        }
        addressProject(new TODO(titleTodo.value, descTodo.value, dateTodo.value, getPriority(priorityTodo)), getProject(selectTodo.value, projects), defaultProject)
        
        todoForm.reset();
        todoDialog.close();
    })
})(); 