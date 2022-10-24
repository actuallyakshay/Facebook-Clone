import { Heading } from "@chakra-ui/react";
import "./App.css";
import Carousel from "./Component/Stories";
import Navbar from "./Component/Navbar";
import Login from "./Pages/Login";
import MainPage from "./Component/MainPage";
import Sidebar from "./Pages/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
