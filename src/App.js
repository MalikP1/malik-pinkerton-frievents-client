import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Group from "./pages/Group/Group";
import Availability from "./pages/Availability/Availability";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group" element={<Group />} />
        <Route path="/availability" element={<Availability />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
