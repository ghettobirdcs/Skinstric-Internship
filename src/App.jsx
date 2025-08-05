import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Testing from "./pages/Testing/Testing";

// TODO: Make the borders look more like they do in the website
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testing" element={<Testing />} />
    </Routes>
  );
}

export default App;
