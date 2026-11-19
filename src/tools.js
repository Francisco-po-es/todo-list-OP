import { format, parse, isValid, isToday, isPast, isTomorrow ,formatDistanceToNow, endOfDay } from 'date-fns';

// Parse a date to a Date Object and then make it readable for users
export function formatDate(date) {
    let parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    if (!isValid(parsedDate)) {
        throw new Error('You have to choose a proper date');
    } else {
        return format(parsedDate, "dd 'of' MMMM yyyy");
    }
}

// Describe todo's due date
export function displayRemainingTime(date) {
    // We use endOfDay function to establish current day and to make the distance add up
    let parsedDate = endOfDay(parse(date, 'yyyy-MM-dd', new Date()));
    if (!isValid(parsedDate)) {
        throw new Error('You have to choose a proper date');
    } else if (isToday(parsedDate)) {
        return 'Today';
    } else if (isTomorrow(parsedDate)) {
        return 'Tomorrow';
    } else if (isPast(parsedDate)) {
        return 'Overdue';
    } else {
        return formatDistanceToNow(parsedDate, {addSuffix: true});
    }
}

// Adds a Todo to the currently active project
export function addressProject(todo, project, defaultObject) {
    if (!project) {
        defaultObject.addTodo(todo);
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
export function addSelect(list, select) {
    select.innerHTML = '<option value="">-- Elige un proyecto --</option>';
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement('option');
        option.textContent = list[i].name;
        option.value = list[i].name;
        select.appendChild(option);
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

export function getPriorityName(level) {
    if (level === 1) return 'Low';
    if (level === 2) return 'Medium';
    if (level === 3) return 'High';
}