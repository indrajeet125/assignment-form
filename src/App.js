import Footer from "./component/Footer";
import Form from "./component/Form";
import Header from "./component/Header";
import ShowComment from "./component/ShowComment";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import api from "./API/Comment";

import "./component/feedback.css";

function App() {
  // const KEy_STORAGE = "contacts";

  const [comments, setComments] = useState([]);

  const addcommenthandler = async (comment) => {
    // setComments([...comments, { id: uuidv4(), ...comment }]);
    const request={
      id: uuidv4(), 
      ...comment
    }
const response=await api.post("/Comments",request)
setComments([...comments, response.data]);

  };
  let deletecomment = async (id) => {
    // const newComments = comments.filter((comment) => {
    //   return comment.id !== id;
    await api.delete(`/Comments/${id}`);
    const newComments = comments.filter((comment) => {
        return comment.id !== id;  });
    setComments(newComments);
  };

  const retriveComment = async () => {
    const response = await api.get("/Comments");
    return response.data;
  };
  useEffect(() => {
    // const retriveComment = JSON.parse(localStorage.getItem(KEy_STORAGE));
    // if (retriveComment) setComments(retriveComment);
    const getAllComments = async () => {
      const retrivedComments = await retriveComment();
      if (retrivedComments) setComments(retrivedComments);
    };
    getAllComments();
  },[]);


  return (
    <>
      <div className="body">
        <Header />

        <div className="aside">
          <div className="left">
            <Form addcommenthandler={addcommenthandler} />
          </div>
          <div className="right">
            <h3> Top 5 Comments are.... </h3>
            <h4>
              total comment{" "}
              <button
                style={{
                  padding: "10px",
                  margin: "2px 10px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                {comments.length}
              </button>
            </h4>
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
