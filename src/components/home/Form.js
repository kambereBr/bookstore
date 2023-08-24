import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';
import Button from './Button';

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const getId = () => Math.floor(Math.random() * 99999);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: getId(),
      title,
      description,
      author,
    };
    dispatch(addBook(newBook));
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
        <Button className="submit-button" event={() => null} label="Add new Book" />
      </form>
    </div>
  );
};

export default Form;
