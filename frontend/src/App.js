import React, { useState, useEffect, useReducer } from "react";
import { useResource } from "react-request-hook";
import { v4 as uuidv4 } from "uuid";

import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import Header from "./Header";
import ChangeTheme from "./ChangeTheme";
import appReducer from "./reducers";
import { ThemeContext, StateContext } from "./contexts";

function App() {
  const initialPosts = [];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });
  const { user } = state;
  useEffect(() => {
    if (user) {
      document.title = `${user}’s ToDoList`;
    } else {
      document.title = "ToDo List";
    }
  }, [user]);
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));
  useEffect(getPosts, []);

  useEffect(() => {
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data.reverse() });
    }
  }, [posts]);

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <Header title="ToDo List" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
          <PostList />
          {state.user && <CreatePost />}
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}
export default App;
