import React, { useState } from "react";
import Button from "react-bootstrap/Button";
function Like() {
  let initialvalue = 0;
  const [like, setlike] = useState(initialvalue);
  const [dislike, setdislike] = useState(0);

  const handlelike = () => {
    setlike((pre) => pre + 1);
    setdislike((pre) => pre - 1);
  };
  const handledislike = () => {
    setdislike((pre) => pre + 1);
    setlike((pre) => pre - 1);
  };
  return (
    <div className="d-flex gap-3">
      <Button onClick={handlelike}>Like {like}</Button>
      <Button onClick={handledislike}>DisLike {dislike}</Button>
    </div>
  );
}

export default Like;
