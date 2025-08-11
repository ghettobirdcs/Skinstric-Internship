import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Testing from "./pages/Testing/Testing";
import Result from "./pages/Result/Result";
import Select from "./pages/Select/Select";

import { ToastContainer } from "react-toastify";

// TODO: /testing responsiveness
// TODO: /result responsiveness
// TODO: /select responsiveness
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/result" element={<Result />} />
        <Route path="/select" element={<Select />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
