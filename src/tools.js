// Adds a Todo to their project. If project is empty, then Todo object goes to Default project
export function addressProject(todo, project) {
    if (!project) {
        defaultPROJECT.addTodo(todo);
    } else {
        project.addTodo(todo);
    }
}

// Obtains Project from the name (from select option)
export function getProject(name, projects) {
     for (let i = 0; i < projects.length; i++) {
        if (name === projects[i].name) {
            return projects[i];
        }
     }
}

// Adds the Project to the select list in Todo form
export function addSelect(list) {
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement('option');
        option.textContent = list[i].name;
        option.value = list[i].name;
        selectTodo.appendChild(option);
    }
}

// Convert the radio button option to an exact priority option for Todo object
export function getPriority(priorityList) {
    for (let i = 0; i < priorityList.length; i++) {
        if (priorityList[i].checked) {
            return parseInt(priorityList[i].value);
        }
    }
}