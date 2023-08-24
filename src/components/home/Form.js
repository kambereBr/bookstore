import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addNewBook } from '../../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const getId = () => Math.floor(Math.random() * 99999);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: getId().toString(),
      title,
      author,
      category,
    };
    dispatch(addNewBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter the book category"
          required
        />
        <Button className="submit-button" event={() => null} label="Add new Book" />
      </form>
    </div>
  );
};

export default Form;
