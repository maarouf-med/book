import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // get all books from api
  const fetchBook = async () => {
    const { data } = await axios.get("http://localhost:3001/books");

    setBooks(data);
  };

  // create a book
  const createBook = async (title) => {
    const { data } = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, data];

    setBooks(updatedBooks);
  };

  // update a book
  const editBook = async (id, newTitle) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...data };
      }
      return book;
    });

    setBooks(updatedBook);
  };

  // delete a book
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBook = books.filter((book) => book.id !== id);
    setBooks(updatedBook);
  };

  const valueToShare = {
    books,
    fetchBook,
    createBook,
    editBook,
    deleteBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };

export default BooksContext;
