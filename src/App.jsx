import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./app.css";
import Post from "./pages/Post";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <Home/> */}
    </div>
  );
}

export default App;
