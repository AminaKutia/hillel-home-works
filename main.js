/* Вхідні дані (для всіх завдань)
const users = [
  { id: 1, name: "Ivan",  age: 25, active: true,  salary: 1000 },
  { id: 2, name: "Anna",  age: 30, active: false, salary: 1500 },
  { id: 3, name: "Oleh",  age: 22, active: true,  salary: 800 },
  { id: 4, name: "Maria", age: 28, active: true,  salary: 2000 },
  { id: 5, name: "Petro", age: 35, active: false, salary: 1200 }
];
Завдання */

const users = [
  { id: 1, name: "Ivan",  age: 25, active: true,  salary: 1000 },
  { id: 2, name: "Anna",  age: 30, active: false, salary: 1500 },
  { id: 3, name: "Oleh",  age: 22, active: true,  salary: 800 },
  { id: 4, name: "Maria", age: 28, active: true,  salary: 2000 },
  { id: 5, name: "Petro", age: 35, active: false, salary: 1200 }
];

/* 1️⃣ Сума зарплат усіх користувачів
Знайти загальну суму значень поля salary для всіх користувачів. */

const totalSalary = users.reduce((sum, u) => sum + u.salary, 0);
console.log(totalSalary);

/* 2️⃣ Сума зарплат активних користувачів
Знайти суму зарплат лише тих користувачів, у яких active === true. */

const activeSalary = users
  .filter(u => u.active)
  .reduce((sum, u) => sum + u.salary, 0);
  console.log(activeSalary);

/* 3️⃣ Кількість користувачів (через reduce)
Порахувати кількість елементів у масиві users, використовуючи метод reduce. */

const usersCount = users.reduce(count => count + 1, 0);
console.log(usersCount);

/* 4️⃣ Середній вік користувачів
Обчислити середній вік усіх користувачів. */

const avgAge =
  users.reduce((sum, u) => sum + u.age, 0) / users.length;
console.log(avgAge);

/* 5️⃣ Об’єкт відповідності id → name
Створити об’єкт, у якому ключ — це id користувача, а значення — його name. */

const idNameMap = users.reduce((obj, u) => {
  obj[u.id] = u.name;
  return obj;
}, {});
console.log(idNameMap);

/* 6️⃣ Кількість активних та неактивних
Отримати об’єкт виду:

{ active: number, inactive: number } */

const activityStats = users.reduce(
  (acc, u) => {
    u.active ? acc.active++ : acc.inactive++;
    return acc;
  },
  { active: 0, inactive: 0 }
);
console.log(activityStats);

/* 7️⃣ Користувач з найбільшою зарплатою
Знайти користувача з максимальною зарплатою.

Метод sort використовувати не можна. */

const richestUser = users.reduce((max, u) =>
  u.salary > max.salary ? u : max
);
console.log(richestUser);

/* 8️⃣ Сума зарплат за віковими групами
Розподілити користувачів на дві групи:

young — вік менше 30 років
adult — вік 30 років і більше
Отримати суму зарплат у кожній групі. */

const salaryByAge = users.reduce(
  (acc, u) => {
    u.age < 30
      ? acc.young += u.salary
      : acc.adult += u.salary;
    return acc;
  },
  { young: 0, adult: 0 }
);
console.log(salaryByAge);

/* 9️⃣ Довжини імен активних користувачів
Отримати масив чисел — довжин імен усіх активних користувачів. */

const activeNameLengths = users
  .filter(u => u.active)
  .map(u => u.name.length);
console.log(activeNameLengths);

/* 🔟 Форматування даних
Створити масив рядків у форматі:

ІМ’Я (salary) */

const formatted = users.map(
  u => `${u.name} (${u.salary})`
);
console.log(formatted);

/* 1️⃣1️⃣ Сума зарплат активних користувачів (тільки reduce)
Знайти суму зарплат активних користувачів, використовуючи лише reduce

(без filter, map). */

const activeSalaryOnlyReduce = users.reduce(
  (sum, u) => u.active ? sum + u.salary : sum,
  0
);
console.log(activeSalaryOnlyReduce);

/* 1️⃣2️⃣ Перевірка активності (every)
Перевірити, чи всі користувачі в масиві є активними.

Результат — true або false. */

const allActive = users.every(u => u.active);
console.log(allActive);

/* 1️⃣3️⃣ Перевірка повноліття (every)
Перевірити, чи всі користувачі мають вік 18 років або більше. */

const allAdults = users.every(u => u.age >= 18);
console.log(allAdults);

/* 1️⃣4️⃣ Сортування за віком
Отримати новий масив користувачів, відсортований за віком у зростаючому порядку.

Початковий масив змінювати не можна. */

const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedByAge);

/* 1️⃣5️⃣ Сортування активних за зарплатою
Отримати новий масив активних користувачів, відсортований за спаданням зарплати. */

const activeSortedBySalary = users
  .filter(u => u.active)
  .sort((a, b) => b.salary - a.salary);
  console.log(activeSortedBySalary);