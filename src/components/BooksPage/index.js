import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../redux/books/books';

import OneBook from './OneBook';
import NewBook from '../NewBook';
import NoBooksMessage from '../NoBooksMessage/index';
import './booksPage.css';

const BooksPage = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (document.readyState !== 'complete') {
      dispatch(loadBooks());
    }
  }, []);

  return (
    <>
      <div className="booksPageContainer">

        {bookList.length
          ? bookList.map((book) => (<OneBook oneBook={book} key={book.id || book.item_id} />))
          : <NoBooksMessage />}

        <NewBook />

      </div>

    </>

  );
};
export default BooksPage;
