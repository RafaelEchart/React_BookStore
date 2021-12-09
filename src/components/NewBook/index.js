import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Input, Select, message } from 'antd';

import { addBook } from '../../redux/books/books';

import './newBook.css';

const NewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNeBook] = useState({ title: '', genre: 'Genre' });
  const { Option } = Select;

  const newBookNameHandler = (e) => {
    setNeBook({ ...newBook, title: e.target.value });
  };

  const genreHandler = (e) => {
    setNeBook({ ...newBook, genre: e });
  };

  const submitNewBook = () => {
    const { title, genre } = newBook;

    if (title.length && (genre.length && (genre !== 'Genre'))) {
      const newBook = {
        item_id: uuid(),
        title,
        category: genre,
      };

      dispatch(addBook(newBook));
      message.success(`New book added: ${title}`);
      setNeBook({ title: '', genre: 'Genre' });
    } else {
      message.warning('Try again: Check inputs');
    }
  };

  return (
    <div className="newBookContainer">
      <div className="newBookInnerContainer">

        <Input placeholder="New Book Name" maxLength={40} onChange={newBookNameHandler} value={newBook.title} className="newBookName" />
        <Select defaultValue="Genre" style={{ width: 120 }} value={newBook.genre} onChange={genreHandler} className="newBookCategory">
          <Option value="Genre" disabled>Genre</Option>
          <Option value="Economy">Economy</Option>
          <Option value="Action">Action</Option>
          <Option value="Science Fiction">Science Fiction</Option>
        </Select>
        <button className="submitButton" type="button" onClick={submitNewBook}><span>ADD BOOK</span></button>

      </div>
    </div>
  );
};

export default NewBook;
