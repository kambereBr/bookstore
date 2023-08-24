import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import Button from './Button';

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
        <br />
        <span>{author}</span>
      </div>
      <Button className="delete-button" event={() => dispatch(removeBook(id))} label="Delete" />
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
