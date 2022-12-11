import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import SearchUserPage from "./pages/SearchUsers";
import ProfilePage from "./pages/ProfilePage";
import { Avatar } from "@mui/material";

import "./App.css";
import ContentBody from "./components/ContentBody";

const userIconStyle = { width: "32px", height: "32px" };

function Navigation(props) {
  return (
    <nav>
      <span className="nav-link-container">
        <span style={{ display: "flex", gap: "2rem" }}>
          <span style={{ fontSize: "32px", color: "white" }}>Tteok</span>
          <NavLink className="nav-link" to="/search-user">
            Users
          </NavLink>
        </span>
        <NavLink className="nav-link" to="/profile">
          <Avatar src="" style={userIconStyle} />
        </NavLink>
      </span>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ContentBody>
        <Routes>
          <Route path="/search-user" element={<SearchUserPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </ContentBody>
    </BrowserRouter>
  );
}

export default App;
