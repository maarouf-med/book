import { useState } from "react";
import BookCreate from "./components/BookCreate.component";
import BookList from "./components/BookList.component";

const App = () => {
  const [books, setBooks] = useState([]);
  // create book
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Number(Math.random().toString().split(".")[1]), title },
    ];

    setBooks(updatedBooks);
  };
  // delete book
  const deleteBook = (id) => {
    const updatedBook = books.filter((book) => book.id !== id);
    setBooks(updatedBook);
  };

  const editBook = (id, newTitle) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBook);
  };

  return (
    <div className="app">
      <h1>Reading Books</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default App;
