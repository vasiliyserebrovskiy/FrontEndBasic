//Connecting to the DOM
const booksContainer = document.getElementById("books-container");

//run main render
fetchBooksList();

function fetchBooksList() {
  fetch("https://vasiliyserebrovskiy.github.io/json-books/books.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong!");
      }
    })
    .then((data) => {
      const { books } = data;
      books.forEach((book) => {
        renderBook(book);
      });
    })
    .catch((err) => {
      errorHandling(err.message);
    });
}

//render each book
function renderBook(book) {
  const bookElement = document.createElement("div");
  bookElement.classList.add("bookCard");
  const { title, author, year, genre, isbn, url } = book;

  //image
  const imageElement = renderBookImage(url);
  //content
  const informationElement = renderBookInformation(
    title,
    author,
    year,
    genre,
    isbn
  );
  bookElement.append(imageElement, informationElement);
  booksContainer.appendChild(bookElement);
}

//render image
function renderBookImage(url) {
  const imageElement = document.createElement("img");
  imageElement.classList.add("book-img");
  imageElement.src = url;
  return imageElement;
}

//render book information
function renderBookInformation(title, author, year, genre, isbn) {
  const informationElement = document.createElement("div");
  informationElement.classList.add("book-content");
  const titleElement = document.createElement("p");
  const authorElement = document.createElement("p");
  const yearElement = document.createElement("p");
  const genreElement = document.createElement("p");
  const isbnElement = document.createElement("p");

  titleElement.textContent = "Title: " + title;
  authorElement.textContent = "Author: " + author;
  yearElement.textContent = "Year: " + year;
  genreElement.textContent = "Genre: " + genre;
  isbnElement.textContent = "isbn: " + isbn;

  informationElement.append(
    titleElement,
    authorElement,
    yearElement,
    genreElement,
    isbnElement
  );
  return informationElement;
}

// render error message
function errorHandling(errMsg) {
  const errorElement = document.createElement("p");
  errorElement.textContent = errMsg;
  errorElement.classList.add("error-message");
  booksContainer.appendChild(errorElement);
}
