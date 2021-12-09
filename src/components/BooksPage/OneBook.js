import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

import './booksPage.css';

const OneBook = (props) => {
  const dispatch = useDispatch();
  const { oneBook } = props;
  const {
    id, title, category,
  } = oneBook;

  const percent = (Math.random() * 100).toFixed(0);

  return (
    <div className="oneBookContainer">
      <div className="oneBookInformation">
        <div className="oneBookInformationText">

          <span className="bookActionSpan">{category}</span>
          <h2 className="bookTitleH2">{title}</h2>
          <span className="bookAuthorSpan">Author</span>

        </div>

        <div className="oneBookInformationOptions">
          <ul>
            <li>Comments</li>
            <li onClick={() => dispatch(removeBook(id))} aria-hidden="true">Remove</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>

      <div className="oneBookRightContainer">

        <div className="oneBookPercent">
          <Progress type="circle" percent={percent} showInfo={false} strokeColor="#379cf6" className="percentAntDesign" />
          <div className="oneBookPercentInnerAlign">
            <span className="percentText">
              {percent}
              %
            </span>
            <span className="completedText">Completed</span>
          </div>
        </div>

        <div className="oneBookCurrentChapter">
          <span className="currentChapter">CURRENT CHAPTER</span>
          <span className="numberChapter">Chapter 1</span>
          <button className="updateButton" type="button"><span>UPDATE PROGRESS</span></button>
        </div>
      </div>
    </div>

  );
};
OneBook.propTypes = {
  oneBook: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OneBook;
