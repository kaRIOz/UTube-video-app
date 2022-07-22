import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import VideoPage from "./pages/videoPage/VideoPage";
import Login from "./pages/loginPage/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./context";
function App() {
  const { theme } = useGlobalContext();
  return (
    <main className="App">
      <Menu />
      <section
        className={`${theme ? "main-content-light-mode" : "main-content"}`}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="video/:id" element={<VideoPage />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
