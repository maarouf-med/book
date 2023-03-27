import { useState } from "react";
import BookEdit from "./BookEdit.component";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    console.log("show edit component");
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
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
