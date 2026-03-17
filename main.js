const books = [
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

let nextId = books.length + 1;

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
`,
);

const listSection = document.getElementById("listSection");
const detailsSection = document.getElementById("detailsSection");

function showDetails(book) {
  detailsSection.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Year: ${book.year}</p>
    <p>${book.description}</p>
  `;
}

// Список книг
function renderBookList() {
  listSection.innerHTML =
    books
      .map(
        (book) => `
    <div style="margin-bottom:10px;">
      <span>${book.title}</span>
      <button style="margin-left:10px;" onclick="showDetailsById(${book.id})">View Details</button>
    </div>
  `,
      )
      .join("") +
    `
    <button style="margin-top:20px;" onclick="showAddBookForm()">Add Book</button>
  `;
}

function showDetailsById(id) {
  const book = books.find((b) => b.id === id);
  if (book) showDetails(book);
}

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
    const newBook = {
      id: nextId++,
      title: formData.get("title"),
      author: formData.get("author"),
      year: Number(formData.get("year")),
      description: formData.get("description"),
    };
    books.push(newBook);
    renderBookList();
    detailsSection.innerHTML = `<p>Book "${newBook.title}" added successfully!</p>`;
  });
}

// Ініціалізація списку
renderBookList();
