import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const Book = ({
  id, title, description, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>{description}</span>
        <span>{author}</span>
      </div>
      <button type="button" className="delete-button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
