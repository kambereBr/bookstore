import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, description, author);
    setTitle('');
    setDescription('');
    setAuthor('');
  };

  return (
    <div>
      <h1>Add a new Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the book title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter the author name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter the book description"
          required
        />
        <button type="submit" className="submit-button">Add new Book</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default Form;
