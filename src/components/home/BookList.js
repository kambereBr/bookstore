import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../../redux/books/booksSlice';
import styles from '../../styles/Book.module.css';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  },
  [dispatch]);
  const { books } = useSelector((store) => store.books);
  return (
    <div>
      <ul className={styles.bookList}>
        {Object.keys(books).map((key) => (
          <Book
            key={key}
            id={key}
            title={books[key][0].title}
            category={books[key][0].category}
            author={books[key][0].author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
