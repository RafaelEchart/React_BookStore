import { deleteBook, getBooks, newBook } from './booksAPI';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const loadBooks = () => (dispatch) => {
  getBooks().then((books) => {
    Object.keys(books).forEach((ID) => {
      const booksTemp = {};
      booksTemp.id = ID;
      booksTemp.title = books[ID][0].title;
      booksTemp.category = books[ID][0].category;
      dispatch(addBook(booksTemp));
    });
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      newBook(action.payload);
      return [...state, action.payload];

    case REMOVE_BOOK:

      deleteBook(action.payload);
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
