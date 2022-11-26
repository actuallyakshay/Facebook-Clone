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
        <Route path="/story" element={<CreateStory />}></Route>
        <Route path="/stories" element={<StoryVisible />}></Route>
        <Route path="/createstory" element={<CreateStory />}></Route>
        <Route path="/singleStory" element={<StoryVisible />}></Route>
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
