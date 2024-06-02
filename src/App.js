import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimeContextProvider } from "./Context/AnimeContext";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import AnimeList from "./components/AnimeList";
import AnimeDetails from "./Pages/AnimeDetails";
import "./App.css";

export default function App() {
  return (
    <AnimeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route inded path="/" element={<Main />} />
          <Route path="/home" element={<Home />}>
            <Route path=":animeDetails" element={<AnimeDetails />} />
          </Route>
          <Route path="/:searchName" element={<AnimeList />}>
            {/* <Route path=":animeDetails" element={<AnimeDetails />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </AnimeContextProvider>
  );
}
