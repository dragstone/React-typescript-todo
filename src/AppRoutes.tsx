import React from "react";
import Todo from "./components/Todo/Todo";
import PageLayout from "./components/PageLayout/PageLayout";
import Post from "./components/Post/Post";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/todo" element={<Todo />} />
          <Route path="/user" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
