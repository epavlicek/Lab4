export default function Post({
  title,
  content,
  author,
  curDate,
  todoComplete,
  todoRemove,
}) {
  curDate = Date.now();

  /* function checkBox(){
    todoComplete(post.id);
  }

  function removeClick(){
    todoRemove(post.id);
  }
  */

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
