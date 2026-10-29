import { PROJECT } from './project.js';
import {TODO} from './todo.js';

let genericTODO = new TODO('A party', 'Party at home', '2027-01-28', 2);
let defaultPROJECT = new PROJECT('Default');
const projects = [defaultPROJECT];

function addressProject(todo, project) {
    if (!project) {
        defaultPROJECT.addTodo(todo);
    } else {
        project.addTodo(todo);
    }
}

function getProject(name, projects) {
     for (let i = 0; i < projects.length; i++) {
        if (name === projects[i].name) {
            return projects[i];
        }
     }
}

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

function addSelect(list) {
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement('option');
        option.textContent = list[i].name;
        option.value = list[i].name;
        selectTodo.appendChild(option);
    }
}

addSelect(projects);

(function () {
    addProject.addEventListener('click', () => {
        projectDialog.showModal();
    })
    addTodo.addEventListener('click', () => {
        selectTodo.innerHTML = "";
        addSelect(projects);
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
        function getPriority(priorityList) {
            for (let i = 0; i < priorityList.length; i++) {
                if (priorityList[i].checked) {
                    return parseInt(priorityList[i].value);
                }
            }
        }
        addressProject(new TODO(titleTodo.value, descTodo.value, dateTodo.value, getPriority(priorityTodo)), getProject(selectTodo.value, projects))
        todoForm.reset();
        todoDialog.close();
    })
})(); 