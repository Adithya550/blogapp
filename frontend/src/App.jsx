import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Route, Routes } from "react-router-dom";
function App() {
  document.body.style.backgroundColor = "white";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />

      </Routes>
    </>
  );
}

export default App;