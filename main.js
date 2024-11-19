let btn = document.querySelector("button");
let tbd = document.querySelector("tbody");
let inputTitle = document.querySelector("#name");
let inputAuthor = document.querySelector("#author");

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let books = [];

btn.addEventListener("click", function () {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let book = new Book(title, author);
  books.push(book);
  tbd.innerHTML = "";
  books.forEach((book, i) => {
    let row = document.createElement("tr");
    row.innerHTML = `
                <th>${i + 1}</th>
                <th>${book.title}</th>
                <th>${book.author}</th>
                <th><i class="fas fa-trash"></i></th>`;
    tbd.appendChild(row);
  });
  inputTitle.value = "";
  inputAuthor.value = "";
});

tbd.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    let rowIndex = e.target.closest("tr").rowIndex - 1;

    // Remove the book from the array
    books.splice(rowIndex, 1);

    // Refresh the table
    tbd.innerHTML = "";
    books.forEach((book, i) => {
      let row = document.createElement("tr");
      row.innerHTML = `
                <th>${i + 1}</th>
                <th>${book.title}</th>
                <th>${book.author}</th>
                <th><i class="fas fa-trash"></i></th>`;
      tbd.appendChild(row);
    });
  }
});
