import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { AppContext } from "../../store/AppProvider";
import "./Post.css";

const Post: React.FC = observer(() => {
  const todoStore = useContext(AppContext);

  useEffect(() => {
    todoStore?.store.post.userLoadData();
  }, []);
  return (
    <div className="post-section">
      {todoStore?.store.post.loader ? (
        <p>Loading...</p>
      ) : todoStore?.store.post.error ? (
        <p>{todoStore?.store.post.error}</p>
      ) : (
        todoStore?.store.post.postList.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
});

export default Post;
