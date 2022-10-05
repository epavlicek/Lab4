import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import { useState, useReducer } from "react";
import appReducer from "./reducers";

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
  //const [user, setUser] = useState("");
  //const [posts, setPosts] = useState(initialPosts);
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      <PostList posts={state.posts} />
      {state.user && (
        <CreatePost user={state.user} posts={state.posts} dispatch={dispatch} />
      )}
    </div>
  );
}

//export default App;
