import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import SearchUserPage from "./pages/SearchUserPage";
import {mockData} from "./constants/mock/users";

import "./App.css";

function Navigation(props) {
  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-primary shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tteok
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/search-user">
              Search User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/search-user" element={<SearchUserPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
