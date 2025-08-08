import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Testing from "./pages/Testing/Testing";
import { ToastContainer } from "react-toastify";
import Result from "./pages/Result/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
