import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./components/Home";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Albums from "./components/Albom";
import Comments from "./components/Coments";
import Photos from "./components/Photo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/photo" element={<Photos />} />
      </Routes>
    </Router>
    // <>
    //   <Photos />
    // </>
  );
}

export default App;
