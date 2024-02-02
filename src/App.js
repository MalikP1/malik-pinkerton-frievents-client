import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Group from "./pages/Group/Group";
import Availability from "./pages/Availability/Availability";
import Event from "./pages/Event/Event";
import Friends from "./pages/Friends/Friends";
import Signup from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/group" element={<Group />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/event" element={<Event />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
