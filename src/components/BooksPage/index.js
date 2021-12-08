import React from 'react';
import { useSelector } from 'react-redux';
import OneBook from './OneBook';
import NewBook from '../NewBook';
import './booksPage.css';

const BooksPage = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
      <>
      <div className="booksPageContainer">

    {bookList.length
      ? bookList.map((book) => (
            <OneBook oneBook={book} key={book.id} />
      ))
      : 'No hay librooss'}

    <NewBook />

      </div>

      </>

  );
};
export default BooksPage;
