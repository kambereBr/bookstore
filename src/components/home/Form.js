import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addNewBook } from '../../redux/books/booksSlice';
import styles from '../../styles/Form.module.css';

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

  const myStyle = {
    cursor: 'pointer',
    padding: 12,
    borderRadius: 3,
    width: 150,
    height: 45,
    backgroundColor: '#0290ff',
    border: 'none',
    letterSpacing: 0.5,
    color: '#fff',
    fontSize: 13,
    fontWeight: 700,
    fontDamily: 'Roboto Slab',
  };

  return (
    <div className={styles.formContainer}>
      <hr />
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the book title"
          className={styles.inputTitle}
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter the author name"
          className={styles.inputTitle}
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter the book category"
          className={styles.inputTitle}
          required
        />
        <Button className="submit-button" style={myStyle} event={() => null} label="ADD BOOK" />
      </form>
    </div>
  );
};

export default Form;
