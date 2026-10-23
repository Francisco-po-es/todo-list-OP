import {TODO} from './todo.js';

let genericTODO = new TODO('A party', 'Party at home', '01-01-2027', 2);

genericTODO.toggleStatus();
genericTODO.setPriority(3);
genericTODO.setDescription('Party at his house');
genericTODO.setPriority(99);

console.log(genericTODO);