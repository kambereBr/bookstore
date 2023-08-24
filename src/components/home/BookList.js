import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  },
  []);
  const { books } = useSelector((store) => store.books);
  return (
    <div>
      {Object.keys(books).map((key) => (
        <Book
          key={key}
          id={key}
          title={books[key][0].title}
          category={books[key][0].category}
          author={books[key][0].author}
        />
      ))}
    </div>
  );
};

export default BookList;
