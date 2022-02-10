import Footer from "./component/Footer";
import Form from "./component/Form";
import Header from "./component/Header";
import ShowComment from "./component/ShowComment";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

import "./component/feedback.css";

function App() {
  const KEy_STORAGE = "contacts";
  const [comments, setComments] = useState([]);
  const addcommenthandler = (comment) => {
    setComments([...comments, { id: uuidv4(), ...comment }]);
  };
  let deletecomment = (id) => {
    const newComments = comments.filter((comment) => {
      return comment.id !== id;
    });
    setComments(newComments);
  };
  useEffect(() => {
    const retriveComment = JSON.parse(localStorage.getItem(KEy_STORAGE));
    if (retriveComment) setComments(retriveComment);
  }, []);
  useEffect(() => {
    localStorage.setItem(KEy_STORAGE, JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <div className="body">
        <Header />
        <div className="aside">
          <div className="left">
            <Form addcommenthandler={addcommenthandler} />
          </div>
          <div className="right">
            <h2> Top 5 Comments are.... </h2>
            <h4>total comment <button style={{padding:"10px",margin:"2px 10px",backgroundColor:"black",color:"white" ,borderRadius:"10px"}} >{comments.length}</button></h4>
            <hr></hr>
            <ShowComment comments={comments} deletecomment={deletecomment} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
