export class PROJECT {
    constructor(name = 'Default') {
        this.name = name;
        this.todos = [];
        this.id = crypto.randomUUID();
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        if (this.todos.some((anyTodo) => anyTodo.id === id)) {
            this.todos = this.todos.filter((todoToRemove) => todoToRemove.id !== id);
        } else {
            throw new Error('Your todo doesnt exist.')
        }
    }

    setName(newName) {
        this.name = newName;
    }

    getTodo(id) {
        const todoGot = this.todos.find((anyTodo) => anyTodo.id === id)
        if (todoGot) {
            return todoGot;
        } else {
            throw new Error('Your todo doesnt exist.')
        }
    }
}