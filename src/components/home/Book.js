import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/booksSlice';
import Button from './Button';

const Book = ({
  id, title, category, author,
}) => {
  const dispatch = useDispatch();

  const delBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book">
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>{category}</span>
        <br />
        <span>{author}</span>
      </div>
      <Button className="delete-button" event={() => delBook(id)} label="Delete" />
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
