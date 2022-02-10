import React from "react";
import Display from "./Display";
const ShowComment = (props) => {
  const deletecomment = (id) => {
    props.deletecomment(id);
  };

  let rendercomments = props.comments.map((comment) => {
    return (
      <>
        <Display
          comment={comment}
          deletecomment={deletecomment}
          // key={comment.id}
        />
      </>
    );
  });
  if (rendercomments.length >= 5) rendercomments = rendercomments.slice(-5);
  else if(rendercomments.length<=0) 
  rendercomments=<h1>Comment list empty</h1>

  return (
    <>
      <div>{rendercomments}</div>
    </>
  );
};

export default ShowComment;
