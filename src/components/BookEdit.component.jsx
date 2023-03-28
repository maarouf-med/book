import { useState } from "react";

import useBookContext from "../hooks/use-book-context";

import Form from "./Form.component";

const BookEdit = ({ onSubmit, book }) => {
  const { id, title } = book;
  const [newTitle, setNewTitle] = useState(title);
  const { editBook } = useBookContext();

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit();
    editBook(id, newTitle);
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
