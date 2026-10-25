import { PROJECT } from './project.js';
import {TODO} from './todo.js';
export {PROJECT} from './project.js'

let genericTODO = new TODO('A party', 'Party at home', '01-01-2027', 2);

genericTODO.toggleStatus();
genericTODO.setPriority(3);
genericTODO.setDescription('Party at his house');

console.log(genericTODO);

let genericPROJECT = new PROJECT();
let anotherPROJECT = new PROJECT('PROJECT 1')

genericPROJECT.addTodo(genericTODO);
anotherPROJECT.addTodo(genericTODO);
genericPROJECT.removeTodo(genericTODO.id);
genericPROJECT.setName('PROJECT 0.5');

console.log(genericPROJECT);
console.log(anotherPROJECT);
console.log(anotherPROJECT.getTodo(genericTODO.id))