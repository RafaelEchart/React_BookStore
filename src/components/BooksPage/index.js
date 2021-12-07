import { useState } from "react";
import OneBook from "./OneBook";
import { Progress } from "antd";
import './booksPage.css'

const BooksPage = () => {
  const [data, setData] = useState([{
      id: 1, 
      action: "Action",
      title: "The Hunger Games",
      author: "Suzanne Collins",
      percent: "64",
      chapter: "Chapter 17"
  },{
    id: 2, 
    action: "Science Fiction",
    title: "Dune",
    author: "Frank Herbert",
    percent: "8",
      chapter: "Chapter 3"
},{
    id: 3, 
    action: "Economy",
    title: "Capital in the Twenty-first Century",
    author: "Suzanne Collins",
    percent: "80",
      chapter: "Introduction"
}]
  );

  return (
      <>
      <div className="booksPageContainer">

    {data.map((book)=>{
        return(
            <OneBook oneBook={book} key={book.id} />
        )
    })}

      </div>
      
      </>
  )
};

export default BooksPage;
