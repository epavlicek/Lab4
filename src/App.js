import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import { useState } from "react";

function App() {
  const initialPosts = [
    {
      title: "Finish Lab 2",
      // content: "Some content",
      author: "Lizzy",
    },
    {
      title: "Buy Toothpaste",
      //content: "Some content",
      author: "Lizzy",
    },
  ];
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <PostList posts={posts} />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
    </div>
  );
}

export default App;
