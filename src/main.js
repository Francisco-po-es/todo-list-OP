import { PROJECT } from './project.js';
import {TODO} from './todo.js';

let genericTODO = new TODO('A party', 'Party at home', '01-01-2027', 2);

genericTODO.toggleStatus();
genericTODO.setPriority(3);
genericTODO.setDescription('Party at his house');

console.log(genericTODO);

let defaultPROJECT = new PROJECT('Default');

function addressProject(todo, project) {
    if (!project) {
        defaultPROJECT.addTodo(todo);
    } else {
        project.addTodo(todo);
    }
}

addressProject(genericTODO);

console.log(defaultPROJECT);