import { useState } from "react";

import useBookContext from "../hooks/use-book-context";

import Form from "./Form.component";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  // get createBook from context
  const { createBook } = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    createBook(title);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <Form
        onSubmitHandler={handleSubmit}
        onChangeHandler={handleChange}
        inputValue={title}
        btntext="Create!"
      />
    </div>
  );
};
export default BookCreate;
