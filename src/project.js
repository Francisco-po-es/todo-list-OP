export class PROJECT {
    constructor(name) {
        this.setName(name);
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
        if (this.name = '') {
            throw new Error('You have to write a proper name for your project.')
        } else {
            this.name = newName;
        }
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