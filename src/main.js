import { PROJECT } from './project.js';
import {TODO} from './todo.js';

let genericTODO = new TODO('A party', 'Party at home', '01-01-2027', 2);
let defaultPROJECT = new PROJECT('Default');

function addressProject(todo, project) {
    if (!project) {
        defaultPROJECT.addTodo(todo);
    } else {
        project.addTodo(todo);
    }
}

let todoDialog = document.getElementById('dialogTodo');
let projectDialog = document.getElementById('dialogProject');

let addTodo = document.getElementById('addTodo');
let addProject = document.getElementById('addProject');

let cancelTodo = document.getElementById('cancelTodo');
let cancelProject = document.getElementById('cancelProject');


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
})(); 