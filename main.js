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

// Ініціалізація Local Storage
if (getBooks().length === 0) {
  saveBooks(initialBooks);
}

const books = getBooks();
const nextId = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;

const root = document.getElementById("root");

// Заголовок + контейнер
root.insertAdjacentHTML(
  "beforeend",
  `
  <h1>Список книг</h1>
  <div id="layout" style="display:flex; gap:40px;">
    <div id="listSection" style="width:40%"></div>
    <div id="detailsSection" style="width:60%; border:1px solid #ccc; padding:15px"></div>
  </div>
  <div id="notification" style="position:fixed; top:20px; right:20px; padding:10px 20px; background:lightgreen; border-radius:5px; display:none;"></div>
`,
);

const listSection = document.getElementById("listSection");
const detailsSection = document.getElementById("detailsSection");
const notification = document.getElementById("notification");

// Показ детальної інформації
function showDetails(book) {
  detailsSection.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Year: ${book.year}</p>
    <p>${book.description}</p>
  `;
}

// Показ списку книг
function renderBookList() {
  const books = getBooks();

  listSection.innerHTML =
    books
      .map(
        (book) =>
          `<div style="margin-bottom:10px;">
          <span>${book.title}</span>
         <button data-id="${book.id}" class="view-btn">View Details</button>
          <button data-id="${book.id}" class="delete-btn" style="color:red;">Delete</button>
          </div>`,
      )
      .join("") +
    `<button id="addBookBtn" style="margin-top:20px;">Add Book</button>`;
}

// Показ деталей по id
function showDetailsById(id) {
  const books = getBooks();
  const book = books.find((b) => b.id === id);
  if (book) showDetails(book);
}

listSection.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);

  // View Details
  if (e.target.classList.contains("view-btn")) {
    showDetailsById(id);
  }

  // Delete
  if (e.target.classList.contains("delete-btn")) {
    deleteBook(id);
  }

  // Add Book
  if (e.target.id === "addBookBtn") {
    showAddBookForm();
  }
});

// Форма додавання книги
function showAddBookForm() {
  detailsSection.innerHTML = `
    <form id="addBookForm">
      <label>Title:<input type="text" name="title" required style="width:100%; margin-bottom:10px;"></label>
      <label>Author:<input type="text" name="author" required style="width:100%; margin-bottom:10px;"></label>
      <label>Year:<input type="number" name="year" required style="width:100%; margin-bottom:10px;"></label>
      <label>Description:<textarea name="description" rows="3" required style="width:100%; margin-bottom:10px;"></textarea></label>
      <button type="submit">Submit</button>
    </form>
  `;

  const form = document.getElementById("addBookForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const books = getBooks();
    const newBook = {
      id: nextId++,
      title: formData.get("title"),
      author: formData.get("author"),
      year: Number(formData.get("year")),
      description: formData.get("description"),
    };
    books.push(newBook);
    saveBooks(JSON.stringify(books));
    renderBookList();
    detailsSection.innerHTML = `<p>Book "${newBook.title}" added successfully!</p>`;
  });
}

// Видалення книги
function deleteBook(id) {
  setTimeout(() => {
    let books = getBooks();
    const removedBook = books.find((b) => b.id === id);
    books = books.filter((b) => b.id !== id);
    saveBooks(JSON.stringify(books));
    renderBookList();
    if (removedBook) {
      showNotification(`Book "${removedBook.title}" deleted successfully!`);
    } else {
      showNotification("Book deleted successfully!");
    }
  }, 1000);
}

// Показ нотифікації
function showNotification(message) {
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

renderBookList();
