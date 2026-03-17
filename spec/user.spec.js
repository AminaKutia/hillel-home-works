const { createUser, filterAdults, getUserNames } = require("../src/user");

describe("тестування коду з допомогою Jasmine.  Модуль 2", () => {
  let users;

  beforeEach(() => {
    users = [
      createUser("Alice", 20),
      createUser("Bob", 17),
      createUser("Charlie", 18),
    ];
  });

  it("повертає коректний обʼєкт користувача", () => {
    const user = createUser("Dave", 25);
    expect(user).toEqual({ name: "Dave", age: 25, isAdult: true });
  });

  it("isAdult === true для віку 18+", () => {
    expect(createUser("Eve", 18).isAdult).toBeTruthy();
    expect(createUser("Frank", 17).isAdult).toBeFalsy();
  });

  it("викидає помилку, якщо name не передано", () => {
    expect(() => createUser("", 20)).toThrow();
    expect(() => createUser(null, 20)).toThrow();
  });

  it("повертає тільки повнолітніх користувачів", () => {
    const adults = filterAdults(users);
    expect(adults.length).toBe(2);
    expect(adults.map(u => u.name)).toContain('Alice');
  });

  it("повертає порожній масив, якщо дорослих немає", () => {
    const kids = [createUser("Tom", 10), createUser("Jerry", 12)];
    expect(filterAdults(kids)).toEqual([]);
  });

  it("повертає масив імен", () => {
    expect(getUserNames(users)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  it("працює з порожнім масивом", () => {
    expect(getUserNames([])).toEqual([]);
  });
});
