// index.js

import { tasks } from './map.js'

function start () {
    let number = prompt('Enter task number:');
    let task = tasks.get(number);

    if (task) {
      task.run();
    } else {
      alert('Task not found');
      start();
    }
}

start()

// constructor.js

export default class Task {
    constructor(description, func) {
      this.description = description;
      this.func = func;
    }
  
    run() {
      let params = prompt(this.description);
      this.func(params);
    }
  }

  export const tasks = new Map();
  
  // tasks-ira.js
  
  import Task from './map.js';
import { tasks } from './map.js'

tasks.set(
  '88v',
  new Task('Swap the first and last digits of number n. Enter n:', (params) =>
    swapMarginalDigits(...params.split(","))
  )
);

tasks.set(
  '88h',
  new Task('Add one at the beginning and the end of the number n. Enter n:', (params) =>
    wrapByOne(...params.split(","))
  ),
);

tasks.set(
  '332',
  new Task(
    "It is known that any natural number can be represented as a sum of not more than four " +
    "squares of natural numbers or, which is the same as the sum of four squares of non-negative integers (Langrange's " +
    "theorem). Given a natural number n. Find the non-negative: x, y, z, t, where n = x*x + y*y +z*z + t*t. Enter n:",
    (params) => findLagrangeNumbers(...params.split(",")))
);

// 88v
function swapMarginalDigits(num) {
    const result = num.slice(-1) + num.slice(1, -1) + num.slice(0, 1);
    console.log(parseInt(result));
  }
  
  // 88h
  function wrapByOne(num) {
    const result = '1'.concat(num, '1');
    console.log(parseInt(result));
  }
  
  // 332
  function findLagrangeNumbers(numStr) {
    let num = +numStr;
    let sqrtOfnum = Math.floor(Math.sqrt(num));
    for (let x = 1; x <= sqrtOfnum; x++) {
      for (let y = 1; y <= sqrtOfnum; y++) {
        for (let z = 1; z <= sqrtOfnum; z++) {
          for (let t = 1; t <= sqrtOfnum; t++) {
            if ((x * x + y * y + z * z + t * t) === num) {
              console.log(`x= ${x}, y= ${y}, z= ${z}, t= ${t}`);
              return
            }
          }
        }
      }
    }
    console.log('This numbers were not found');
  }
  
  
  
  // в html потрібно вкласти тільки tasks.js і index.js, його останнім.
