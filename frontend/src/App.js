import { Button, Heading, Input } from "@chakra-ui/react";
import "./App.css";
import Carousel from "./Component/Stories";
import Navbar from "./Component/Navbar";
import { useEffect, useState } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import OwnStory from "./utils/OwnStory";
import CreateStory from "./utils/CreateStory";
import UserPage from "./utils/UserPage";

function App() {
  return (
    <div className="App">
      <AllRoutes />
     
      {/* <UserPage /> */}
    </div>
  );
}

export default App;
