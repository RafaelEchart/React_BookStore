import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Input, Select, message } from 'antd';

import { addBook } from '../../redux/books/books';

import './newBook.css';

const NewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNeBook] = useState({ title: '', category: 'Category' });
  const { Option } = Select;

  const newBookNameHandler = (e) => {
    setNeBook({ ...newBook, title: e.target.value });
  };

  const genreHandler = (e) => {
    setNeBook({ ...newBook, category: e });
  };

  const submitNewBook = () => {
    const { title, category } = newBook;

    if (title.length && (category.length && (category !== 'Category'))) {
      const newBook = {
        item_id: uuid(),
        title,
        category,
      };

      dispatch(addBook(newBook));
      message.success(`New book added: ${title}`);
      setNeBook({ title: '', category: 'Category' });
    } else {
      message.warning('Try again: Check inputs');
    }
  };

  return (
    <div className="newBookContainer">
      <div className="newBookTitleContainer">
        <h3>ADD NEW BOOK</h3>
      </div>
      <div className="newBookInnerContainer">

        <Input placeholder="Book title" maxLength={40} onChange={newBookNameHandler} value={newBook.title} className="newBookName" />
        <Select defaultValue="Category" style={{ width: 120 }} value={newBook.category} onChange={genreHandler} className="newBookCategory">
          <Option value="Category" disabled>Category</Option>
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
