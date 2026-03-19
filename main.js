const BASE_URL = "https://6971cf4a32c6bacb12c49096.mockapi.io/";
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const formWrapper = document.querySelector(".form-wrapper");
const detailsSection = document.getElementById("detailsSection");
const notification = document.getElementById("notification");

// Показ списку книг
function renderBookList() {
  fetch(`${BASE_URL}/books`)
    .then((response) => response.json())
    .then((data) => {
      const markup = data
        .map(
          ({ author, title, year, description, id }) =>
            `<li id=${id}><p>Title: ${title}</p><p>Author: ${author}</p><p>Year: ${year}</p><p>Description: ${description}</p><button class='view-btn'>View details</button><button class='delete'>Delete</button></li>`,
        )
        .join("");
      list.innerHTML = markup;
      const viewBtns = list.querySelectorAll(".view-btn");
      viewBtns.forEach((btn) => btn.addEventListener("click", viewBook));
      const deleteBtns = list.querySelectorAll(".delete");
      deleteBtns.forEach((btn) => btn.addEventListener("click", deleteBook));
    });
}

// Показ деталей
function viewBook(e) {
  const id = e.target.parentNode.id;
  fetch(`${BASE_URL}/books/${id}`)
    .then((data) => data.json())
    .then((book) => {
      detailsSection.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Year: ${book.year}</p>
    <p>${book.description}</p>
  `;
    })
    .catch((error) => console.log(error));
}

// Видалення книги
function deleteBook(e) {
  const id = e.target.parentNode.id;
  e.target.textContent = "Deleting";
  setTimeout(() => {
    const options = {
      method: "DELETE",
    };
    fetch(`${BASE_URL}/books/${id}`, options)
      .then(() => {
        renderBookList();
        showNotification(`Book deleted successfully!`);
      })
      .catch((error) => console.log(error));
  }, 1000);
}

addBtn.addEventListener("click", addBook);

function addBook() {
  formWrapper.innerHTML = showAddBookForm();
  const form = document.querySelector(".form");
  const savBtn = document.querySelector(".save");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookData = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      year: e.target.elements.year.value,
      description: e.target.elements.description.value,
    };
    setTimeout(() => {
      const options = {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-Type": "application/json; charset = UTF-8",
        },
      };

      savBtn.textContent = "Saving...";
      fetch(`${BASE_URL}/books`, options)
        .then(() => {
          formWrapper.innerHTML = "";
          renderBookList();
          showNotification(`Book added successfully!`);
        })
        .catch((error) => console.log(error));
    }, 1000);
  });
}

// Форма додавання книги
function showAddBookForm() {
  return `
    <form class="form">
      <label>Title:<input type="text" name="title" required style="width:100%; margin-bottom:10px;"></label>
      <label>Author:<input type="text" name="author" required style="width:100%; margin-bottom:10px;"></label>
      <label>Year:<input type="number" name="year" required style="width:100%; margin-bottom:10px;"></label>
      <label>Description:<textarea name="description" rows="3" required style="width:100%; margin-bottom:10px;"></textarea></label>
      <button class="save">Save</button>
    </form>
  `;
}

// Показ нотифікації
function showNotification(message) {
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

renderBookList();
