import React, { useState } from 'react';
import Form from './Form';
import BookList from './BookList';

const Home = () => {
  const [books, setBooks] = useState([]);

  const getId = () => Math.floor(Math.random() * 99999);

  const handleSubmitBook = (title, description, author) => {
    const book = {
      id: getId(), title, author, description,
    };
    setBooks([...books, book]);
  };

  const handleDeleteBook = (id) => {
    const listBook = books.filter((book) => book.id !== id);
    setBooks(listBook);
  };

  return (
    <div>
      <Form addBook={handleSubmitBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;
