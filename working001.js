const exercisesNumber = []
const exercises = []
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

class Exercise {
    constructor (number, name, description, execute) {
        this.number = number
        this.name = name,
        this.description = description,
        this.execute = execute,
        exercises.push(this),
        exercisesNumber.push(number)
    }
}

const exercise87 = new Exercise(
    87,
    "sumOfLastDigits",
    "Natural numbers 'a, b' are given. Find sum of last digits",
    sumOfLastDigits
)

const exercise226 = new Exercise(
    226,
    "multipleNumbers",
    "Find multiple numbers",
    multipleNumbers
)

function sumOfLastDigits(a, b) {
    const numbers = [a, b]
    const result = numbers.reduce((sum, el) => {
        return sum + +String(el).slice(-1);
      }, 0)
    return result;
  }

function multipleNumbers(m, n) {
  const result = [];
  for (let i = 2; i < m && i < n; i++) {
    if (m % i === 0 && n % i === 0) {
      result.push(i);
    }
  }
  return result;
}

start()
