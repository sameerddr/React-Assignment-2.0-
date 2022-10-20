import React, { useState } from "react";
function Comment() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const handleInput = (event) => {
    setCommentText(event.target.value);
  };
  const handleComment = () => {
    setComments([...comments, commentText]);
  };

  return (
    <>
      <input
        id="comment"
        type="text"
        placeholder="Leave a comment..."
        value={commentText}
        onChange={handleInput}
      />
      <button onClick={handleComment}>Post</button>
      {comments.map((comment) => (
        <div>
          <h3>{comment}</h3>
        </div>
      ))}
    </>
  );
}
export default Comment;
