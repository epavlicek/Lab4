import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../contexts";
function Post({ title, content, author, curDate, todoComplete, todoRemove }) {
  curDate = Date.now();

  /* function checkBox(){
    todoComplete(post.id);
  }

  function removeClick(){
    todoRemove(post.id);
  }
  */
  const { secondaryColor } = useContext(ThemeContext);
  console.log("Post rendered");

  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by
        <b>{author}</b>
      </i>
      <br />

      <i>
        Date
        <b>{curDate}</b>
      </i>
      <input
        type="checkbox"
        id="completed"
        name="completed"
        value="completed"
      />

      <label for="completed">Completed</label>
    </div>
  );
}
export default React.memo(Post);
