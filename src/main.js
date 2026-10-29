import { PROJECT } from './project.js';
import {TODO} from './todo.js';

let genericTODO = new TODO('A party', 'Party at home', '01-01-2027', 2);
let defaultPROJECT = new PROJECT('Default');
const projects = [defaultPROJECT];

function addressProject(todo, project) {
    if (!project) {
        defaultPROJECT.addTodo(todo);
    } else {
        project.addTodo(todo);
    }
}

let todoDialog = document.getElementById('dialogTodo');
let projectDialog = document.getElementById('dialogProject');

let projectForm = document.querySelector('#dialogProject > form')

let addProject = document.getElementById('addProject');
let createProject = document.getElementById('createProject');
let cancelProject = document.getElementById('cancelProject');

let titleProject = document.getElementById('inputTitlePJ');

let addTodo = document.getElementById('addTodo');
let cancelTodo = document.getElementById('cancelTodo');

(function () {
    addProject.addEventListener('click', () => {
        projectDialog.showModal();
    })
    addTodo.addEventListener('click', () => {
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
})(); 