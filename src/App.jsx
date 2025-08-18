import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Testing from "./pages/Testing/Testing";
import Result from "./pages/Result/Result";
import Select from "./pages/Select/Select";
import Summary from "./pages/Summary/Summary";
import Camera from "./components/Camera/Camera.jsx";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />

        <Route path="/result" element={<Result />} />
        <Route path="/camera" element={<Camera />} />

        <Route path="/select" element={<Select />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
