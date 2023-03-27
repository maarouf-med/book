import BookShow from "./BookShow.component";

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default BookList;
