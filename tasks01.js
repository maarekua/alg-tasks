//87

function sumOfLastNumbers(numbers) {
  console.log(
    numbers.reduce((sum, el) => {
      return sum + +String(el).slice(-1);
    }, 0)
  );
}

//226

sumOfLastNumbers([12, 15, 21, 52]);

function multipleNumbers(m, n) {
  const result = [];
  for (let i = 2; i < m && i < n; i++) {
    if (m % i === 0 && n % i === 0) {
      result.push(i);
    }
  }
  console.log(result);
}

//559

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
  console.log(mersennePrimeNumbers.filter(el => el < number));
}

mersennePrime(50);

// 86ab

function numberLengthSum(number) {
  const arrayNumbers = String(number).split("");
  const numberSum = arrayNumbers.reduce((sum, num) => sum + +num, 0);
  console.log(
    `Number length: ${arrayNumbers.length}, Number sum: ${numberSum}`
  );
}

numberLengthSum(123141);

// 330

function perfectNumber(number) {
  const divisors = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) divisors.push(i);
  }
  const divisorsSum = divisors.reduce((sum, num) => sum + num);
  if (divisorsSum === number) console.log(`Number ${number} is Perfect`);
  else console.log(`Number ${number} is not Perfect`);
}

perfectNumber(8128);

//88

function numberFunction(number) {
  const stringNumber = String(number);
  if (stringNumber.includes("3")) console.log(`There is "3" in number`);
  else console.log(`There is no "3" in number`);
  const reversed = +stringNumber
    .split("")
    .reverse()
    .join("");
  console.log(reversed);
  const replaceNumbers =
    stringNumber.slice(-1) + stringNumber.slice(1, -1) + stringNumber[0];
  console.log(+replaceNumbers);
  console.log(+`1${stringNumber}1`);
}

numberFunction(1231245);



// 560

const deviders = []
const result = []

function findDeviders(number) {
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      deviders.push(i)
    }
  }
}
  
 function sumOfDeviders (array) {
   return array.reduce((sum, el) => sum + el)
 }

function friendsNumbers(range1, range2) {
  for (let i = range1; i <= range2; i++) {
    findDeviders(i)
    if (sumOfDeviders(deviders) <= range2 && sumOfDeviders(deviders) >= range1) {
      result.push([i, sumOfDeviders(deviders)])
      deviders.length = 0
    }
  }
  console.log(result)
}

console.log(friendsNumbers(200, 300))
