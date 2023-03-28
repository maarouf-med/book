import { useState } from "react";

import useBookContext from "../hooks/use-book-context";

import BookEdit from "./BookEdit.component";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBook } = useBookContext();

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="random  pic"
      />
      {showEdit ? <BookEdit onSubmit={handleSubmit} book={book} /> : book.title}
      <div className="actions">
        <button className="edit" onClick={handleEdit}></button>
        <button className="delete" onClick={handleDelete}></button>
      </div>
    </div>
  );
};
export default BookShow;
