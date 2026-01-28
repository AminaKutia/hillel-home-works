/* 1. Порахувати кількість додатних чисел у масиві.
Дано масив:

[3, -1, 0, 5, 7, -4]

Порахуйте, скільки в ньому додатних чисел. */

const arr1 = [3, -1, 0, 5, 7, -4];
let count = 0;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 0) {
    count++;
  }
}
console.log(count);


/* 2. Створити новий масив тільки з парних чисел.
Дано масив:

[1, 4, 7, 10, 13, 16]

Створіть новий масив, у який потраплять тільки парні елементи. */

const arr2 = [1, 4, 7, 10, 13, 16];
const neuArr = [];

for(let i = 0; i < arr2.length; i++){
  if(arr2[i]%2 === 0){
    neuArr.push(arr2[i]);
  }
}
console.log(neuArr);

/* 3. Замінити всі від’ємні числа на 0.
Дано масив:

[5, -3, 2, -8, 0]

Замініть усі від’ємні значення на 0. */

const arr3 = [5, -3, 2, -8, 0];

for(let i = 0; i < arr3.length; i++){
  if(arr3[i] < 0){
    arr3[i] = 0;
  }
}
console.log(arr3);

/* 4. Перевірити, чи містить масив певний елемент.
Дано масив:

["red", "green", "blue"]

Та значення: "green"

Перевірте, чи міститься це значення в масиві. Виведіть "Знайдено" або "Не знайдено". */

const arr4 = ["red", "green", "blue"];
const value = "green";
let result = false;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] === value) {
    result = true;
    break;
  }
}

console.log(result ? "Знайдено" : "Не знайдено");

/* 5. Видалити перший нуль у масиві.
Дано масив:

[4, 0, 5, 0, 2]

Видаліть перший елемент зі значенням 0. */

let arr5 = [4, 0, 5, 0, 2];
let deleted = false;

for(let i = 0; i < arr5.length; i++){
  if(arr5[i] === 0){
    arr5.splice(i, 1);
    break;
  }
}
console.log(arr5);

/* 6. Перетворити масив слів у рядок через кому.
Дано масив:

["apple", "banana", "pear"]

Створіть рядок "apple, banana, pear" використовуючи цикл. */

let arr6 = ["apple", "banana", "pear"];
let result1 = "";

for(let i = 0; i < arr6.length; i++){
  result1 += arr6[i];
  if(i < arr6.length - 1) {
    result1 += ", ";
  }
}
console.log(result1);

/* 7. Знайти мінімальне число в масиві.
Дано масив:

[9, 2, 14, -5, 7]

Знайдіть найменший елемент без використання Math.min. */

const arr7 = [9, 2, 14, -5, 7];
let min = arr7[0];

for(let i = 0; i < arr7.length; i++){
  if(arr7[i] < min){
    min = arr7[i];
  }
}
console.log(min);

/* 8. Порахувати кількість входжень заданого елемента.
Дано масив:

["a", "b", "a", "c", "a"]

Та елемент: "a"

Порахуйте, скільки разів "a" зустрічається у масиві. */

const arr8 = ["a", "b", "a", "c", "a"];
let search = "a";
let count1 = 0;

for(let i = 0; i < arr8.length; i++){
  if(arr8[i] === search){
    count1++;
  }
}
console.log(count1);

/* 9. Додати число в початок або кінець масиву.
Дано масив:

[5, 7, 9]

Та число: 12

Якщо число більше за 10 — додайте в кінець масиву, інакше — у початок. */

const arr9 = [5, 7, 9];
const num = 12;

if(num > 10){
  arr9.push(num);
}
else{
  arr9.unshift(num);
}
console.log(arr9);

/* 10. Створити масив довжини n, заповнений одиницями.
Дано число:

n = 5

Створіть масив довжини 5, заповнений значенням 1 . */

const arr10 = [];
const n = 5;

for(let i = 0; i < n; i++){
  arr10.push(1);
}

console.log(arr10);