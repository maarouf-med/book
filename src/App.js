import { useEffect } from "react";

import BookCreate from "./components/BookCreate.component";
import BookList from "./components/BookList.component";

import useBookContext from "./hooks/use-book-context";

const App = () => {
  const { fetchBook } = useBookContext();

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return (
    <div className="app">
      <h1>Reading Books</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};
export default App;
