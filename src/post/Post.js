export default function Post({ title, content, author, curDate }) {
  curDate = Date.now();
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
