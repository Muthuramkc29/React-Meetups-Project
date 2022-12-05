import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/FavouriteContextProvider";
import "./Navbar.css";

function Navbar() {
  const context = useContext(FavouriteContext);
  return (
    <div>
      <header className="header">
        <div className="logo">React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/add-meetups">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favourites">My Favorites</Link>
              <span className="favCount">{context.favouritesCount}</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
