import React from 'react';
import { Input, Select } from 'antd';
import './newBook.css';

const NewBook = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
      <div className="newBookContainer">
                <div className="newBookInnerContainer">

      <Input placeholder="New Book Name" className="newBookName"/>
      <Select defaultValue="Category" className="newBookSelectGenre" onChange={handleChange}></Select>
      <button className="submitButton"><span>ADD BOOK</span></button>

                </div>
      </div>
  );
};

export default NewBook;
