/* Частина 1 — Клас Product

Створіть клас Product, який має:

Публічні властивості:

name

price

category

Приватну властивість:

#id — унікальний номер товару.

Статичні елементи:

Product.counter = 0

Product.generateId() — повертає новий унікальний ID і збільшує лічильник.

У конструкторі присвоюйте приватний #id = Product.generateId().

Додайте:

✔ Геттер:

info → повертає рядок формату:

"Laptop | Electronics | 1200$"

✔ Сетер:

price

— приймає нову ціну

— якщо ціна < 0 → показує попередження та не змінює значення */

class Product {
  static counter = 0;

  static generateId() {
    return ++Product.counter;
  }

  #id;

  constructor(name, price, category) {
    this.name = name;
    this._price = price;
    this.category = category;
    this.#id = Product.generateId();
  }

  get id() {
    return this.#id;
  }

  get info() {
    return `${this.name} | ${this.category} | ${this._price}$`;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (newPrice < 0) {
      console.warn("Price cannot be negative!");
      return;
    }
    this._price = newPrice;
  }
}

/* Частина 2 — Клас Order

Створіть клас Order, який має:

Приватні властивості:

#orderId

#products (масив товарів)

Публічні методи:

addProduct(product) — додає товар у масив

getTotalPrice() — повертає сумарну ціну товарів

getProductCount() — повертає кількість товарів у замовленні

Геттер:

summary

повертає рядок:

"Order #3: 5 items, total 2500$"

Приватний метод:

#logOrder() — просто виводить "Order created: <id>"

✔ Викликайте приватний метод у конструкторі, щоб він спрацьовував при створенні замовлення. */

class Order {
  static counter = 0;

  #orderId;
  #products = [];

  constructor() {
    this.#orderId = ++Order.counter;
    this.#logOrder();
  }

  #logOrder() {
    console.log(`Order created: ${this.#orderId}`);
  }

  addProduct(product) {
    this.#products.push(product);
  }

  getTotalPrice() {
    return this.#products.reduce((sum, p) => sum + p.price, 0);
  }

  getProductCount() {
    return this.#products.length;
  }

  get summary() {
    return `Order #${this.#orderId}: ${this.getProductCount()} items, total ${this.getTotalPrice()}$`;
  }
}

/* Частина 3 — Наслідування: PremiumOrder

Створіть клас PremiumOrder, який наслідується від Order.

Додайте:

Публічну властивість:

discount — знижка у відсотках

Перевизначений метод:

getTotalPrice()

→ повинно рахувати суму з урахуванням знижки:

total = baseTotal - (baseTotal * discount / 100) */

class PremiumOrder extends Order {
  constructor(discount) {
    super();
    this.discount = discount;
  }

  getTotalPrice() {
    const baseTotal = super.getTotalPrice();
    return baseTotal - (baseTotal * this.discount / 100);
  }
}

/* Частина 4 — Клас User

Створіть клас User, який має:

Публічні властивості:

name

email

Приватну властивість:

#orders — масив замовлень

Публічні методи:

addOrder(order) — додає замовлення

getOrderCount() — кількість замовлень

listOrders() — повертає масив summary кожного замовлення

Геттер:

lastOrder

→ повертає останнє замовлення (або null, якщо їх немає) */

class User {
  #orders = [];

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  addOrder(order) {
    this.#orders.push(order);
  }

  getOrderCount() {
    return this.#orders.length;
  }

  listOrders() {
    return this.#orders.map(order => order.summary);
  }

  get lastOrder() {
    return this.#orders.length
      ? this.#orders[this.#orders.length - 1]
      : null;
  }
}

/* ✨ Частина 5 — Тестування (обов’язкове)

Створіть:

кілька товарів (Product)

звичайне замовлення (Order)

преміум замовлення (PremiumOrder)

користувача (User)

Перевірте:

✔ додавання товарів у замовлення

✔ роботу геттера summary

✔ працездатність сетера price

✔ виклик приватного методу #logOrder() у Order

✔ роботу наслідування у PremiumOrder

✔ додавання замовлень користувачеві

✔ геттер lastOrder

✔ збільшення ID через статичний лічильник Product.counter */

const laptop = new Product("Laptop", 1200, "Electronics");
const phone = new Product("Phone", 800, "Electronics");
const book = new Product("Book", 50, "Education");

console.log(laptop.info);
console.log(phone.info);
console.log("Product counter:", Product.counter);

book.price = -100;
book.price = 60;
console.log(book.info);

// Звичайне замовлення
const order1 = new Order();
order1.addProduct(laptop);
order1.addProduct(book);

console.log(order1.summary);

// Преміум замовлення
const premiumOrder = new PremiumOrder(10);
premiumOrder.addProduct(phone);
premiumOrder.addProduct(laptop);

console.log(premiumOrder.summary);

// Користувач
const user = new User("Ivan", "ivan@gmail.com");

user.addOrder(order1);
user.addOrder(premiumOrder);

console.log("Order count:", user.getOrderCount());
console.log("All orders:", user.listOrders());
console.log("Last order:", user.lastOrder.summary);