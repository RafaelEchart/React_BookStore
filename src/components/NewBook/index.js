import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Input, Select, message } from 'antd';

import { addBook } from '../../redux/books/books';

import './newBook.css';

const NewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNeBook] = useState({ title: '', author: '', genre: '' });
  const { Option } = Select;

  const newBookNameHandler = (e) => {
    setNeBook({ ...newBook, title: e.target.value });
  };

  const authorHanlder = (e) => {
    setNeBook({ ...newBook, author: e.target.value });
  };

  const genreHandler = (e) => {
    setNeBook({ ...newBook, genre: e });
  };

  const submitNewBook = () => {
    const { title, author, genre } = newBook;

    if (title.length && author.length && (genre.length && (genre !== 'Genre'))) {
      const randomPercent = (Math.random() * 100).toFixed(0);
      const newBook = {
        id: uuid(),
        title,
        author,
        genre,
        percent: randomPercent,

      };

      dispatch(addBook(newBook));
      message.success(`New book added: ${title} `);
      setNeBook({ author: '', title: '', genre: 'Genre' });
    } else {
      message.warning('Try again: Check inputs');
    }
  };

  return (
      <div className="newBookContainer">
                <div className="newBookInnerContainer">

      <Input placeholder="New Book Name" onChange={newBookNameHandler} value={newBook.title} className="newBookName"/>
      <Input placeholder="Author" onChange={authorHanlder} value={newBook.author} className="newBookAuthor"/>
      <Select defaultValue="Genre" style={{ width: 120 }} value={newBook.genre} onChange={genreHandler} className="newBookCategory">
      <Option value="Genre" disabled>Genre</Option>
      <Option value="Economy">Economy</Option>
      <Option value="Action">Action</Option>
      <Option value="Science Fiction">Science Fiction</Option>
      </Select>
      <button className="submitButton" onClick={submitNewBook}><span>ADD BOOK</span></button>

                </div>
      </div>
  );
};

export default NewBook;
