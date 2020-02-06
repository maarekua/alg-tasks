import { tasks, taskNumbers } from './constructor.js'


function start () {
    const userInput = getInput();
    const exercise = chooseExercise(userInput);
    const result = execute.apply(exercise);
    resultLogger(result)
}

function getInput() {
    return +prompt(`
        Please choose exersice you want to execute:
        ${taskNumbers}`);
}

function chooseExercise(input) {
    const inputValue = checkExerciseNumber(input);
    if (inputValue > -1) {
        return tasks[inputValue]
    }
    else {
        alert('Please choose valid exercise number!');
        start();
    }
}

function checkExerciseNumber(input) {
    return taskNumbers.indexOf(input)
}

function execute() {
    const numOfArgs = this.execute.length
    let userInput = prompt(`${this.name}
        ${this.description},
        Please provide ${numOfArgs} parameter(s) separeted by comma ","`)
    let input = userInput.split(",").map(el => +el)
    return this.execute(...input)
}

function resultLogger(message) {
    console.log(message)
}

start()
