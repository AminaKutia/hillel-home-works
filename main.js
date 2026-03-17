// Початкові книги (seed)
const initialBooks = [
  {
    id: 1,
    title: "JavaScript для початківців",
    author: "Іван Петренко",
    year: 2021,
    description:
      "Книга знайомить з основами JavaScript та пояснює ключові поняття простою мовою.",
  },
  {
    id: 2,
    title: "Сучасний JavaScript",
    author: "Олена Коваль",
    year: 2020,
    description:
      "Посібник з сучасних можливостей JavaScript та прикладів їх використання.",
  },
  {
    id: 3,
    title: "Веб-розробка з нуля",
    author: "Андрій Мельник",
    year: 2019,
    description:
      "Книга про створення веб-застосунків з використанням HTML, CSS та JavaScript.",
  },
];

// Ініціалізація localStorage при першому запуску
if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify(initialBooks));
}

function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

function setBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

function getNextId() {
  const books = getBooks();
  return books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
}

const root = document.getElementById("root");

// Заголовок

const title = document.createElement("h1");
title.textContent = "Список книг";
root.appendChild(title);

// Контейнер сторінки

const layout = document.createElement("div");
layout.style.display = "flex";
layout.style.gap = "40px";
root.appendChild(layout);

// Ліва частина — список книг

const listSection = document.createElement("div");
listSection.style.width = "40%";
layout.appendChild(listSection);

// Права частина — деталі / форма

const detailsSection = document.createElement("div");
detailsSection.style.width = "60%";
detailsSection.style.border = "1px solid #ccc";
detailsSection.style.padding = "15px";

layout.appendChild(detailsSection);

// Показ деталей книги
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

// Нотифікація
function showNotification(message) {
  const notif = document.createElement("div");
  notif.textContent = message;
  notif.style.position = "fixed";
  notif.style.top = "20px";
  notif.style.right = "20px";
  notif.style.background = "#4caf50";
  notif.style.color = "#fff";
  notif.style.padding = "10px 15px";
  notif.style.borderRadius = "5px";
  notif.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  notif.style.opacity = "0";
  notif.style.transition = "opacity 0.3s";

  document.body.appendChild(notif);

  // Поява через 1 секунду
  setTimeout(() => {
    notif.style.opacity = "1";
  }, 1000);

  // Зникнення через 3 секунди
  setTimeout(() => {
    notif.style.opacity = "0";
    setTimeout(() => {
      notif.remove();
    }, 300);
  }, 4000);
}

// Форма додавання книги
function showAddBookForm() {
  detailsSection.innerHTML = "";

  const form = document.createElement("form");

  const fields = [
    { label: "Title", name: "title" },
    { label: "Author", name: "author" },
    { label: "Year", name: "year" },
    { label: "Description", name: "description" },
  ];

  fields.forEach((f) => {
    const fieldLabel = document.createElement("label");
    fieldLabel.textContent = f.label + ": ";
    fieldLabel.style.display = "block";

    let input;
    if (f.name === "description") {
      input = document.createElement("textarea");
      input.rows = 3;
    } else {
      input = document.createElement("input");
      if (f.name === "year") input.type = "number";
    }
    input.name = f.name;
    input.required = true;
    input.style.width = "100%";
    input.style.marginBottom = "10px";

    fieldLabel.appendChild(input);
    form.appendChild(fieldLabel);
  });

  const submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.type = "submit";
  form.appendChild(submit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newBook = {
      id: getNextId(),
      title: formData.get("title"),
      author: formData.get("author"),
      year: Number(formData.get("year")),
      description: formData.get("description"),
    };

    const books = getBooks();
    books.push(newBook);
    setBooks(books);

    renderBookList();

    detailsSection.innerHTML = `<p>Book "${newBook.title}" added successfully!</p>`;
  });

  detailsSection.appendChild(form);
}

// Видалення книги
function deleteBook(id) {
  let books = getBooks();
  books = books.filter((b) => b.id !== id);
  setBooks(books);
  renderBookList();
  showNotification("Book deleted successfully!");
}

// список книг
function renderBookList() {
  listSection.innerHTML = "";

  const books = getBooks();

  books.forEach((book) => {
    const item = document.createElement("div");
    item.style.marginBottom = "10px";

    const bookName = document.createElement("span");
    bookName.textContent = book.title;

    const viewButton = document.createElement("button");
    viewButton.textContent = "View Details";
    viewButton.style.marginLeft = "10px";
    viewButton.addEventListener("click", () => showDetails(book));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "5px";
    deleteButton.addEventListener("click", () => deleteBook(book.id));

    item.appendChild(bookName);
    item.appendChild(viewButton);
    item.appendChild(deleteButton);

    listSection.appendChild(item);
  });

  // Кнопка Add Book
  const addButton = document.createElement("button");
  addButton.textContent = "Add Book";
  addButton.style.marginTop = "20px";
  addButton.addEventListener("click", showAddBookForm);

  listSection.appendChild(addButton);
}

renderBookList();
