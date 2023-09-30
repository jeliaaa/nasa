import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import MainFeed from "./pages/main/MainFeed";
import Footer from "./comps/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./comps/navbar/Navigation";
import Forum from "./pages/forum/Forum";
import Feed from "./pages/feed/Feed";
import Map from "./pages/map/Map";
import ForumPg from "./pages/forum/ForumPg";
import FeedSingle from "./pages/feed/FeedSingle";
import MoonPage from "./pages/moon/MoonPage";
import { useEffect } from "react";
import Crime from "./pages/crime/Crime";

function App() {
  const location = useLocation();
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollToTop();
  }, [location])
  return (
    <div className="App">
      <Navigation />
      <div className="site">
        <Routes>
          <Route index path="/" element={<MainFeed />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/:id" element={<ForumPg />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/:id" element={<FeedSingle />} />
          <Route path="/criminals" element={<Crime />} />
          <Route path="/map" element={<Map />} />
          <Route path="/moon" element={<MoonPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
