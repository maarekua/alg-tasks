import Task from './constructor.js'

const task87 = new Task(
    87,
    "sumOfLastDigits",
    "Natural numbers 'a, b' are given. Find sum of last digits",
    sumOfLastDigits
)

const task226 = new Task(
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

const task559 = new Task (
    559,
    "Mersenne Prime",
    "Description tutka",
    mersennePrime
)

function mersennePrime(number) {
    const mersennePrimeNumbers = [
      3,
      7,
      31,
      127,
      8191,
      131071,
      524287,
      2147483647,
      2305843009213693951,
      618970019642690137449562111,
      162259276829213363391578010288127,
      170141183460469231731687303715884105727
    ];
    return mersennePrimeNumbers.filter(el => el < number);
  }
  
