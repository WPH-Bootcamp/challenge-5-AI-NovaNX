type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

const books: Book[] = [];

function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = { title, author, publicationYear };
  books.push(newBook);
  console.log(
    `Book added: "${newBook.title}" by ${newBook.author} (${newBook.publicationYear})`
  );
}

function listBooks(): void {
  console.log("All Books:");
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const matchingBooks = books.filter((book) => book.title.includes(title));

  if (matchingBooks.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  matchingBooks.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}
// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
