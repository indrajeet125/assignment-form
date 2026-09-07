import React from "react";
import Display from "./Display";
const ShowComment = (props) => {
  const deletecomment = (id) => {
    props.deletecomment(id);
  };

  let rendercomments = props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <Display
          comment={comment}
          deletecomment={deletecomment}
        />
      </div>
    );
  });
  if (rendercomments.length >= 5) rendercomments = rendercomments.slice(-5);
  else if (rendercomments.length <= 0)
    rendercomments = <p className="empty-state">No matching feedback yet.</p>;

  return (
    <>
      <div>{rendercomments}</div>
    </>
  );
};

export default ShowComment;
