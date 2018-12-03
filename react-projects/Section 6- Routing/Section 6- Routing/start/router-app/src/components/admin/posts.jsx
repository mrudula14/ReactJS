import React from "react";

const Posts = ({ match, location }) => {
  return (
    <div>
      <h1>Admin Posts</h1>
      Year:
      {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
