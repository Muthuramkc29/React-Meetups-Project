import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
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
              <span className="favCount">{props.favouritesCount}</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

const mapStateToProps = ({ favouritesCount }) => ({
  favouritesCount,
});

export default connect(mapStateToProps, null)(Navbar);
