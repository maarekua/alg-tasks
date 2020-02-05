const exercises = []
function start () {
    const userInput = getInput()
    checkInput(+userInput)
}

function getInput() {
    return prompt(`
        Please choose exersice you want to execute:
        ${exercises}`);
}

function checkInput(input) {
    if (+input !== NaN && exercises.includes(+input)) {console.log('it is working')}
    else {
        alert('Please choose valid exercise number!');
        start();
    }
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
        exercises.push(number)
    }
}

const exercise88 = new Exercise(
    87,
    "Find Sum of last digits",
    "Natural numbers 'a, b' are given. Find sum of last digits",
    sumOfLastNumbers
    )

function sumOfLastNumbers(a, b) {
    const numbers = [a, b]
    const result = numbers.reduce((sum, el) => {
        return sum + +String(el).slice(-1);
      }, 0)
    return result;
  }

  start()
