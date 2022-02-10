import React from "react";

const Display = (props) => {
  const { id, salutation, fname, lname, comment } = props.comment;
  return (
    <>
      <div className="comment">
        <h3 style={{ color: "black" }}>
          {salutation}
          {fname}
          {lname}{" "}
        </h3>
        <textarea
          value={comment}
          style={{ fontSize: "18px", width: "80%" }}
        ></textarea>
        
        <button
          className="delete"
          style={{
            color: "red",
            padding: "1px",
            backgroundColor: "black",
            borderRadius: "8px",
          }}
          onClick={(e) => props.deletecomment(id)}
        >
          delete
        </button>
        <hr></hr>
        <p> {console.log(props.comment)}</p>
      </div>
    </>
  );
};

export default Display;
