"use strict"

/* 
Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const START_VALUE = 20;
const END_VALUE = 30;
const STEP = 0.5;

const result = [];
for (let i = START_VALUE; i <= END_VALUE; i += STEP) {
  result.push(i);
}

console.log(result.join(' '));
