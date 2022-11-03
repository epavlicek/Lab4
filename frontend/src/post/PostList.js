import { useContext } from "react";

import Post from "./Post";
import { StateContext } from "../contexts";

export default function PostList() {
  const { state } = useContext(StateContext);
  const { posts } = state;
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
