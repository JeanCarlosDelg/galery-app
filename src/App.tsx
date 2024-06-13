import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import PhotoPages from "./pages/PhotoPages";
import VideoPages from "./pages/VideoPages";
import Navbar from "./components/navbar/Navbar";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div className="background">
      <div className="overlay">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/fotos" element={<PhotoPages />} />
            <Route path="/videos" element={<VideoPages />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
