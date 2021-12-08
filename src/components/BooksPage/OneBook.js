import React from 'react';
import { Progress } from 'antd';
import './booksPage.css';

const OneBook = (props) => {
  const { oneBook } = props;

  return (
      <div className ="oneBookContainer">
            <div className="oneBookInformation">
                <div className="oneBookInformationText">

                <span className="bookActionSpan">{oneBook.action}</span>
                <h2 className="bookTitleH2">{oneBook.title}</h2>
                <span className="bookAuthorSpan">{oneBook.author}</span>

                </div>

                <div className="oneBookInformationOptions">
                    <ul>
                        <li>Comments</li>
                        <li>Remove</li>
                        <li>Edit</li>
                    </ul>
                </div>
            </div>

            <div className="oneBookRightContainer">

            <div className="oneBookPercent">
            <Progress type="circle" percent={oneBook.percent} showInfo={false} strokeColor="#379cf6" className="percentAntDesign"/>
            <div className="oneBookPercentInnerAlign">
                <span className="percentText">{oneBook.percent}%</span>
                <span className="completedText">Completed</span>
            </div>
            </div>

            <div className="oneBookCurrentChapter">
                <span className="currentChapter">CURRENT CHAPTER</span>
                <span className="numberChapter">{oneBook.chapter}</span>
                <button className="updateButton"><span>UPDATE PROGRESS</span></button>
            </div>
            </div>
        </div>

  );
};

export default OneBook;
