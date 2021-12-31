import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./app.css";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8080/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObjet) => {
          setUser(resObjet.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser();
  }, []);

  console.log(user);

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
