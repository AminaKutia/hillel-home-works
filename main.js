/* 1. Object destructuring
Дано:

const employee = {
  name: "Vitalii",
  position: "Developer",
  level: "Middle",
  salary: 2500
};
Завдання:

Деструктуризацією дістань name і salary.

Створи об’єкт:

{ fullName: name, monthlySalary: salary } */

const employee = {
  name: "Vitalii",
  position: "Developer",
  level: "Middle",
  salary: 2500
};

const { name, salary } = employee;

const result = {
  fullName: name,
  monthlySalary: salary
};

console.log(result);


/* 2. Spread
Дано:

const settings = {
  mode: "light",
  notifications: true,
  volume: 70
};
Завдання:

Створи новий об’єкт updatedSettings, де всі властивості ті ж, але mode: "dark". */

const settings = {
  mode: "light",
  notifications: true,
  volume: 70
};

const updatedSettings = {
  ...settings,
  mode: "dark"
};

console.log(updatedSettings);

/* 3. Object rest
Дано:

const car = {
  brand: "Mazda",
  model: "CX-5",
  year: 2018,
  mileage: 90000,
  color: "red"
};
Завдання:

Отримай у змінну brand, а решту властивостей помісти в об’єкт details. */

const car = {
  brand: "Mazda",
  model: "CX-5",
  year: 2018,
  mileage: 90000,
  color: "red"
};

const { brand, ...details } = car;

console.log(brand);
console.log(details);

/* 4. forEach
Дано:

const departments = [
  { title: "HR", budget: 15000 },
  { title: "IT", budget: 45000 },
  { title: "Marketing", budget: 20000 }
];
Завдання:

Порахуйте суму всіх бюджетів і збережіть у змінну totalBudget. */

const departments = [
  { title: "HR", budget: 15000 },
  { title: "IT", budget: 45000 },
  { title: "Marketing", budget: 20000 }
];

let totalBudget = 0;

departments.forEach(department => {
  totalBudget += department.budget;
});

console.log(totalBudget);

/* 5. map
Дано:

const items = [
  { name: "Book", price: 200 },
  { name: "Pen", price: 30 },
  { name: "Notebook", price: 80 }
];
Завдання:

Створіть новий масив, де price збільшено на 15%. */

const items = [
  { name: "Book", price: 200 },
  { name: "Pen", price: 30 },
  { name: "Notebook", price: 80 }
];

const updatedItems = items.map(item => ({
  ...item,
  price: item.price * 1.15
}));

console.log(updatedItems);

/* 6. filter
Дано:

const accounts = [
  { user: "Anna", active: true },
  { user: "Oleg", active: false },
  { user: "Nina", active: true }
];
Завдання:

Створіть масив лише з активними акаунтами. */

const accounts = [
  { user: "Anna", active: true },
  { user: "Oleg", active: false },
  { user: "Nina", active: true }
];

const activeAccounts = accounts.filter(account => account.active);

console.log(activeAccounts);

/* 7. find
Дано:

const users = [
  { name: "Stepan", email: "s@example.com" },
  { name: "Olha", email: "o@example.com" },
  { name: "Ihor", email: "i@example.com" }
];
Завдання:

Знайдіть користувача з email "o@example.com". */

const users = [
  { name: "Stepan", email: "s@example.com" },
  { name: "Olha", email: "o@example.com" },
  { name: "Ihor", email: "i@example.com" }
];

const foundUser = users.find(user => user.email === "o@example.com");

console.log(foundUser);

/* 8. findIndex
Дано:

const words = ["dog", "window", "car", "elephant"];
Завдання:

Знайдіть індекс першого слова довше ніж 5 символів. */

const words = ["dog", "window", "car", "elephant"];

const index = words.findIndex(word => word.length > 5);

console.log(index);

/* 9. flatMap
Дано:

const students = [
  { name: "Ivan", subjects: ["math", "physics"] },
  { name: "Olya", subjects: ["biology"] },
  { name: "Nazar", subjects: ["chemistry", "math"] }
];
Завдання:

Створіть масив усіх предметів (однорівневий масив). */

const students = [
  { name: "Ivan", subjects: ["math", "physics"] },
  { name: "Olya", subjects: ["biology"] },
  { name: "Nazar", subjects: ["chemistry", "math"] }
];

const allSubjects = students.flatMap(student => student.subjects);

console.log(allSubjects);

/* 10. Комбінована (filter + map)
Дано:

const products = [
  { title: "Camera", price: 500 },
  { title: "Tripod", price: 120 },
  { title: "Light", price: 250 },
  { title: "Mic", price: 80 }
];
Завдання:

Залишити лише продукти з ціною > 200

Створити масив рядків формату: "Camera — 500$" */

const products = [
  { title: "Camera", price: 500 },
  { title: "Tripod", price: 120 },
  { title: "Light", price: 250 },
  { title: "Mic", price: 80 }
];

const resultProducts = products
  .filter(product => product.price > 200)
  .map(product => `${product.title} — ${product.price}$`);

console.log(resultProducts);