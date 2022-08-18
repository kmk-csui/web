import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import DivisionPage from "pages/DivisionPage/DivisionPage";
import GalleryPage from "pages/GalleryPage/GalleryPage";
import HomePage from "pages/HomePage/HomePage";
import EventPage from "pages/EventPage/EventPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="division" element={<DivisionPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="event" element={<EventPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
