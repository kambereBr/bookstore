import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY_API = 'GCBOOjVHPY5Sbf74W64o';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${KEY_API}/books`;

const initialState = {
  books: [],
  isLoading: true,
  error: '',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const resp = await axios.get(API_URL);
    return resp.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Oooops, something went wrong');
  }
});

export const addNewBook = createAsyncThunk('book/addNewBook',
  async (newBook, thunkAPI) => {
    try {
      const resp = await axios.post(API_URL, {
        item_id: newBook.item_id,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return JSON.stringify({ message: resp, book: newBook });
    } catch (error) {
      return thunkAPI.rejectWithValue('Oooops, something went wrong');
    }
  });

export const deleteBook = createAsyncThunk('book/deleteBook',
  async (id, thunkAPI) => {
    const url = `${API_URL}/${id}`;
    try {
      const resp = await axios.delete(url, {
        item_id: id,
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return JSON.stringify({ message: resp, item_id: id });
    } catch (error) {
      return thunkAPI.rejectWithValue('Oooops, something went wrong');
    }
  });

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(deleteBook.fulfilled, (state, action) => {
        const payload = JSON.parse(action.payload);
        state.books = Object.keys(state.books)
          .filter((key) => key !== payload.item_id)
          .reduce((val, key) => ({ ...val, [key]: state.books[key] }), {});
      })
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        const payload = JSON.parse(action.payload);
        const newBook = {
          title: payload.book.title,
          author: payload.book.author,
          category: payload.book.category,
        };
        const key = payload.book.item_id;
        state.books = {
          ...state.books,
          [key]: [newBook],
        };
      });
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
