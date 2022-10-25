import { Heading } from "@chakra-ui/react";
import "./App.css";
import Carousel from "./Component/Stories";
import Navbar from "./Component/Navbar";
import Login from "./Pages/Login";
import MainPage from "./Component/MainPage";
import Sidebar from "./Pages/Sidebar";
import CreateStory from "./utils/CreateStory";
import StoryVisible from "./utils/SingleStoryVisible";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <MainPage />
      {/* <CreateStory /> */}
      {/* <StoryVisible /> */}
    </div>
  );
}

export default App;
