import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Testing from "./pages/Testing/Testing";
import { ToastContainer } from "react-toastify";

// TODO: Focus input field after navigating to /testing
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
