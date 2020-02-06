import { exercises, exercisesNumber } from "./exercises"

function start () {
    const userInput = getInput()
    checkInput(+userInput)
}

function getInput() {
    return prompt(`
        Please choose exersice you want to execute:
        ${exercisesNumber}`);
}

function checkInput(input) {
    const exercise = checkExerciseNumber(+input);
    if (+input !== NaN && exercise > -1) {
        let execution = run.bind(exercises[exercise]);
        execution();
    }
    else {
        alert('Please choose valid exercise number!');
        start();
    }
}

function checkExerciseNumber(input) {
    return exercisesNumber.indexOf(input)
}

function run() {
    const numOfArgs = this.execute.length
    let userInput = prompt(`${this.name}
        ${this.description},
        Please provide ${numOfArgs} parameter(s) separeted by comma (,)`)
    let input = userInput.split(",")
    resultLogger(this.execute(+input[0], +input[1]))
}

function resultLogger(message) {
    console.log(message)
}



start()
