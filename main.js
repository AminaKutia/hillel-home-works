const books = [
  {

    id: 1,

    title: "JavaScript для початківців",

    author: "Іван Петренко",

    year: 2021,

    description: "Книга знайомить з основами JavaScript та пояснює ключові поняття простою мовою."

  },

  {

    id: 2,

    title: "Сучасний JavaScript",

    author: "Олена Коваль",

    year: 2020,

    description: "Посібник з сучасних можливостей JavaScript та прикладів їх використання."

  },

  {

    id: 3,

    title: "Веб-розробка з нуля",

    author: "Андрій Мельник",

    year: 2019,

    description: "Книга про створення веб-застосунків з використанням HTML, CSS та JavaScript."

  }

];
 

/* Завдання */
/* Отримайте доступ до елемента з id="root" за допомогою JavaScript. */

const root = document.getElementById("root");

/* Динамічно створіть заголовок сторінки (наприклад, «Список книг») і додайте його в root. */

const title = document.createElement("h1");
title.textContent = "Список книг";
root.appendChild(title);

/* Реалізуйте макет сторінки, поділений на дві частини:

ліва частина — список книг;

права частина — блок для відображення детальної інформації. */

const layout = document.createElement("div");

layout.style.display = "flex";

layout.style.gap = "40px";

root.appendChild(layout);

/* У лівій частині сторінки:

згенеруйте список книг на основі масиву books;

для кожної книги відобразіть її назву;

поруч з назвою кожної книги додайте кнопку «View Details». */

const listSection = document.createElement("div");

listSection.style.width = "40%";

/* При натисканні на кнопку «View Details»:

у правій частині сторінки має відображатися детальна інформація про відповідну книгу;

детальна інформація повинна містити:

назву книги;

автора;

рік видання;

опис.

При натисканні на іншу кнопку «View Details» інформація в правій частині повинна оновлюватися відповідно до обраної книги.*/

const detailsSection = document.createElement("div");

detailsSection.style.width = "60%";

detailsSection.style.border = "1px solid #ccc";

detailsSection.style.padding = "15px";

layout.appendChild(listSection);

layout.appendChild(detailsSection);

// функція показу деталей

function showDetails(book) {
  detailsSection.innerHTML = "";

  const bookTitle = document.createElement("h2");

  bookTitle.textContent = book.title;

  const author = document.createElement("p");

  author.textContent = "Author: " + book.author;

  const year = document.createElement("p");

  year.textContent = "Year: " + book.year;

  const description = document.createElement("p");

  description.textContent = book.description;

  detailsSection.appendChild(bookTitle);

  detailsSection.appendChild(author);

  detailsSection.appendChild(year);

  detailsSection.appendChild(description);

}

// список книг

books.forEach(book => {

  const item = document.createElement("div");

  item.style.marginBottom = "10px";

  const bookName = document.createElement("span");

  bookName.textContent = book.title;

  const button = document.createElement("button");

  button.textContent = "View Details";

  button.style.marginLeft = "10px";

  button.addEventListener("click", () => {

    showDetails(book);

  });

  item.appendChild(bookName);

  item.appendChild(button);

  listSection.appendChild(item);

});