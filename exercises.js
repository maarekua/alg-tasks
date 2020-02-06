export const exercises = {};
export const exercisesNumber = {};

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

const exercise229 = new Exercise(
    229,
    "multipleNumbers",
    "Find multiple numbers",
    multipleNumbers
)

function sumOfLastDigits(a, b, d, e) {
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

module.exports = testObject
