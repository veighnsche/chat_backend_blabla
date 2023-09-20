const libraryData = require('./mockdata.json');

// Function to create a new book
function createBook(newBook) {
  libraryData.books.push(newBook);
}

// Function to read all books
function readAllBooks() {
  return libraryData.books;
}

// Function to read a book by its ID
function readBookById(bookId) {
  return libraryData.books.find((book) => book.id === bookId);
}

// Function to update a book by its ID
function updateBookById(bookId, updatedBook) {
  const index = libraryData.books.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    libraryData.books[index] = { ...libraryData.books[index], ...updatedBook };
  }
}

// Function to delete a book by its ID
function deleteBookById(bookId) {
  const index = libraryData.books.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    libraryData.books.splice(index, 1);
  }
}

// Function to search for books by title or author
function searchBooks(query) {
  const lowerQuery = query.toLowerCase();
  return libraryData.books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery)
  );
}