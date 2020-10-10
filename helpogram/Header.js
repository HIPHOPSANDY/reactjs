import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

import { auth } from "./firebase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header__app">
      <Link to="/">
        <img className="app__headerImage" src="" alt="" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <div className="icons">
          <SearchIcon className="header__sii" />
          <HomeIcon className="home__ic" />
          <SendIcon className="home__si" />
          <ExploreIcon className="home__ei" />
          <FavoriteBorderIcon className="home__fi" />
          <Link to="/login">
            <AccountCircleIcon className="account__login" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
