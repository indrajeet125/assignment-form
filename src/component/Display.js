import React from "react";

const Display = (props) => {
  const { id, salutation, fname, lname, comment } = props.comment;
  return (
    <>
      <article className="comment">
        <h3>
          {salutation}
          {fname}
          {lname}{" "}
        </h3>
        <textarea
          value={comment}
          readOnly
          aria-label="Comment text"
        ></textarea>
        
        <button
          className="delete"
          type="button"
          onClick={() => props.deletecomment(id)}
        >
          Delete
        </button>
        <hr></hr>
      </article>
    </>
  );
};

export default Display;
