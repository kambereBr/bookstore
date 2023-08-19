import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, description, author, onDelete,
}) => (
  <div className="book">
    <div>
      <span>{title}</span>
    </div>
    <div>
      <span>{description}</span>
      <span>{author}</span>
    </div>
    <button type="button" className="delete-button" onClick={onDelete}>Delete</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
