const books = [

  {

    id: 1,

    title: "JavaScript для початківців",

    author: "Іван Петренко",

    year: 2021,

    description:

      "Книга знайомить з основами JavaScript та пояснює ключові поняття простою мовою."

  },

  {

    id: 2,

    title: "Сучасний JavaScript",

    author: "Олена Коваль",

    year: 2020,

    description:

      "Посібник з сучасних можливостей JavaScript та прикладів їх використання."

  },

  {

    id: 3,

    title: "Веб-розробка з нуля",

    author: "Андрій Мельник",

    year: 2019,

    description:

      "Книга про створення веб-застосунків з використанням HTML, CSS та JavaScript."

  }

];

 

let nextId = books.length + 1;

 

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

 

// список книг

function renderBookList() {

  listSection.innerHTML = "";

 

  books.forEach(book => {

    const item = document.createElement("div");

    item.style.marginBottom = "10px";

 

    const bookName = document.createElement("span");

    bookName.textContent = book.title;

 

    const button = document.createElement("button");

    button.textContent = "View Details";

    button.style.marginLeft = "10px";

 

    button.addEventListener("click", () => showDetails(book));

 

    item.appendChild(bookName);

    item.appendChild(button);

 

    listSection.appendChild(item);

  });

 

  //"Add Book"

  const addButton = document.createElement("button");

  addButton.textContent = "Add Book";

  addButton.style.marginTop = "20px";

 

  addButton.addEventListener("click", showAddBookForm);

 

  listSection.appendChild(addButton);

}

 

// Форма додавання книги

function showAddBookForm() {

  detailsSection.innerHTML = "";

 

  const form = document.createElement("form");

 

  const fields = [

    { label: "Title", name: "title" },

    { label: "Author", name: "author" },

    { label: "Year", name: "year" },

    { label: "Description", name: "description" }

  ];

 

  fields.forEach(f => {

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

 

  form.addEventListener("submit", e => {

    e.preventDefault();

 

    const formData = new FormData(form);

    const newBook = {

      id: nextId++,

      title: formData.get("title"),

      author: formData.get("author"),

      year: Number(formData.get("year")),

      description: formData.get("description")

    };

 

    books.push(newBook);

    renderBookList();

 

    detailsSection.innerHTML = `<p>Book "${newBook.title}" added successfully!</p>`;

  });

 

  detailsSection.appendChild(form);

}

 

renderBookList();