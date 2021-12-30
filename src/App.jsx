import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./app.css";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={!user ? <Navigate to="/login" /> : <Post />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
