import { useState } from "react";
import Form from "./Form.component";
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  // pass data to parent
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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
