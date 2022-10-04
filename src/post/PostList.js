import Post from "./Post";

export default function PostList({ posts = [] }) {
  return (
    <form>
      <div>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          value="completed"
        />

        <label for="completed">Completed</label>

        {posts.map((p, i) => (
          <Post {...p} key={"post-" + i} />
        ))}
        <div>
          <button type="check">Completed</button>
        </div>
      </div>
    </form>
  );
}
