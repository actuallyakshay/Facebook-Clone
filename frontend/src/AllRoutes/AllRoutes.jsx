import React from "react";

import { Routes, Route } from "react-router-dom";
import MainPage from "../Component/MainPage";
import Messenger from "../Messenger/Messenger";
import FriendRequestPage from "../Notification/FriendRequestPage";
import Login from "../Pages/Login";
import ProfilePage from "../Pages/ProfileSection/ProfilePage";
import UserStories from "../Pages/ProfileSection/UserStories";
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
        <Route
          path="/ownStory"
          element={
            <PrivateRoute>
              <UserStories />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/messenger"
          element={
            <PrivateRoute>
              <Messenger />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
