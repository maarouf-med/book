import { useContext } from "react";
import BookCreate from "../context/books";

function useBookContext() {
  return useContext(BookCreate);
}

export default useBookContext;
