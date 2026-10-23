export class TODO {
    static #level = [1, 2, 3];
    constructor(title, description, dueDate, priority = 1) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.setPriority(priority);
        this.id = crypto.randomUUID();
        this.status = false;
    }

    toggleStatus() {
        this.status = !this.status;
    }

    setPriority(newPriority) {
        if (TODO.#level.includes(newPriority)) {
            this.priority = newPriority;
        } else {
            throw new Error('You have to choose a difficult.');
        }
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(newDesc) {
        this.description = newDesc;
    }

    setDueDate(newDate) {
        this.dueDate = newDate;
    }
}