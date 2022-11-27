import React from "react";

import { Routes, Route } from "react-router-dom";
import MainPage from "../Component/MainPage";
import Login from "../Pages/Login";
import ProfilePage from "../Pages/ProfileSection/ProfilePage";
import CreateStory from "../utils/CreateStory";
import StoryVisible from "../utils/SingleStoryVisible";
import UserPage from "../utils/UserPage";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
             </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/story"
          element={
            <PrivateRoute>
              <CreateStory />
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/stories"
          element={
            <PrivateRoute>
              <StoryVisible />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/createstory"
          element={
            <PrivateRoute>
              <CreateStory />
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/singleStory"
          element={
            <PrivateRoute>
              <StoryVisible />
             </PrivateRoute>
          }
        ></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
             </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
