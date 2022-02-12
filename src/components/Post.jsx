import React from "react";

function Post({ item }) {
  return (
    <div>
      <div className="box_wrapper">
        <h1>{item.title}</h1>
        <p className="text-body">{item.body}</p>
      </div>
    </div>
  );
}

export default Post;
