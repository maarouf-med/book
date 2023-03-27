import { useState } from "react";
import Form from "./Form.component";

const BookEdit = ({ onSubmit, book }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(book.id, newTitle);
  };

  return (
    <div className="book-edit">
      <Form
        onSubmitHandler={handleSubmit}
        onChangeHandler={handleChange}
        inputValue={newTitle}
        btntext="Save"
        btnClassName="is-primary"
      />
    </div>
  );
};
export default BookEdit;
