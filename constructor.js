export default class Task {
    constructor (number, name, description, execute) {
        this.number = number
        this.name = name,
        this.description = description,
        this.execute = execute,
        tasks.push(this),
        taskNumbers.push(number)
    }
}
export const tasks = [];
export const taskNumbers = [];
