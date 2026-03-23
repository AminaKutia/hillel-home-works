const { sum, divide, isEven, average } = require("../src/math.js");

describe("тестування коду з допомогою Jasmine.  Модуль 1", () => {
  let numbers;
  beforeEach(() => {
    numbers = [2, 4, 6];
  });

  it("коректне додавання додатних чисел", () => {
    expect(sum(7, 3)).toBe(10);
  });

  it("роботa з відʼємними числами", () => {
    expect(sum(-4, -2)).toBe(-6);
    expect(sum(-2, 3)).toBe(1);
  });

  it("коректне ділення", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("викидання помилки при діленні на 0", () => {
    expect(() => divide(2, 0)).toThrow();
  });

  it("повертає true для парних чисел", () => {
    expect(isEven(4)).toBeTruthy();
  });

  it("повертає false для непарних", () => {
    expect(isEven(3)).toBeFalsy();
  });

  it("коректний підрахунок середнього значення", () => {
    expect(average(numbers)).toBe(4);
  });

  it("викидання помилки для порожнього масиву", () => {
    expect(() => average([])).toThrow();
  });
});
