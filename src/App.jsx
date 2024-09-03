// Updated App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* BrowserRouter now wraps the entire Layout */}
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
