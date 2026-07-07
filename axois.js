const api = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

const BASE_URL = "https://6971cf4a32c6bacb12c49096.mockapi.io/";
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const formWrapper = document.querySelector(".form-wrapper");
const detailsSection = document.getElementById("detailsSection");
const notification = document.getElementById("notification");
let selectedBookId = null;

// Показ списку книг
async function renderBookList() {
  try {
    const { data } = await api(`${BASE_URL}/books`);
    const markup = data
      .map(
        ({ author, title, year, description, id }) =>
          `<li id=${id}><p>Title: <span class='title'>${title}</span></p><p>Author: <span class='author'>${author}</span></p><p>Year: <span class='year'>${year}</span></p><p>Description: <span class='description'>${description}</span></p><button class='view-btn'>View details</button><button class='delete'>Delete</button><button class='edit'>Edit</button><div class ='edit-form-wrapper'></div></li>`,
      )
      .join("");
    list.innerHTML = markup;
    const viewBtns = list.querySelectorAll(".view-btn");
    viewBtns.forEach((btn) => btn.addEventListener("click", viewBook));
    const deleteBtns = list.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => btn.addEventListener("click", deleteBook));
    const editBtns = list.querySelectorAll(".edit");
    editBtns.forEach((btn) => btn.addEventListener("click", editBook));
  } catch (error) {
    console.log(error);
  }
}

// Показ деталей
async function viewBook(e) {
  try {
    const id = e.target.parentNode.id;
    selectedBookId = id;
    const { data } = await api.get(`${BASE_URL}/books/${id}`);
    detailsSection.innerHTML = `
    <h2>${data.title}</h2>
    <p>Author: ${data.author}</p>
    <p>Year: ${data.year}</p>
    <p>${data.description}</p>
  `;
  } catch (error) {
    console.log(error);
  }
}

// Видалення книги
async function deleteBook(e) {
  try {
    const id = e.target.parentNode.id;
    e.target.textContent = "Deleting";
    await api.delete(`${BASE_URL}/books/${id}`);
    if (selectedBookId === id) {
      detailsSection.innerHTML = "";
      selectedBookId = null;
    }
    renderBookList();
    showNotification(`Book deleted successfully!`);
  } catch (error) {
    console.log(error);
  }
}

addBtn.addEventListener("click", addBook);

function addBook() {
  formWrapper.innerHTML = showAddBookForm();
  const form = document.querySelector(".form");
  const savBtn = document.querySelector(".save");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bookData = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      year: e.target.elements.year.value,
      description: e.target.elements.description.value,
    };
    try {
      savBtn.textContent = "Saving...";
      await api.post(`${BASE_URL}/books`, bookData);
      formWrapper.innerHTML = "";
      renderBookList();
      showNotification(`Book added successfully!`);
    } catch (error) {
      console.log(error);
    }
  });
}

// Форма додавання книги
function showAddBookForm(title = "", author = "", year = "", description = "") {
  return `
    <form class="form">
      <label>Title:<input type="text" name="title" value ='${title}' required style="width:100%; margin-bottom:10px;"></label>
      <label>Author:<input type="text" name="author" value ='${author}' required style="width:100%; margin-bottom:10px;"></label>
      <label>Year:<input type="number" name="year" value ='${year}' required style="width:100%; margin-bottom:10px;"></label>
      <label>Description:<textarea name="description" rows="3" required style="width:100%; margin-bottom:10px;">${description}</textarea></label>
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

function editBook(e) {
  const li = e.target.parentNode;
  const id = li.id;
  const editFormWrapper = li.querySelector(".edit-form-wrapper");
  const title = li.querySelector(".title").textContent;
  const author = li.querySelector(".author").textContent;
  const year = li.querySelector(".year").textContent;
  const description = li.querySelector(".description").textContent;
  editFormWrapper.innerHTML = showAddBookForm(title, author, year, description);
  const form = li.querySelector(".form");
  const editBtn = e.target;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bookData = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      year: e.target.elements.year.value,
      description: e.target.elements.description.value,
    };
    try {
      editBtn.textContent = "Editing";
      await api.put(`${BASE_URL}/books/${id}`, bookData);
      renderBookList();
      showNotification(`Book edited successfully!`);
    } catch (error) {
      console.log(error);
    }
  });
}

renderBookList();
