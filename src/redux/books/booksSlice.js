import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: // Initial state:
    [
      {
        id: 'item1',
        title: 'The Great Gatsby',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        id: 'item2',
        title: 'Anna Karenina',
        description: 'At est officia autem culpa amet quos deserunt dolores debitis!',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        id: 'item3',
        title: 'The Selfish Gene',
        description: 'Commodi porro enim dignissimos velit, explicabo quisquam.',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
