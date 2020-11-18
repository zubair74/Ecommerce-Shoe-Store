import React from "react";
import "../styles.css";

import { useHistory } from "react-router-dom";

// import Cart from "./cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
// import logo from "./logo1.png";

export default function Navbar({ cart, count, searchShoe }) {
  // console.log(cart);

  return (
    <div className="Landingpage">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <h3>Ecommerce App</h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="ml-5 collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="ml-5 navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                {" "}
                <Link to="/" className="link">
                  Home
                </Link>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="ml-3 nav-item">
              <a class="nav-link" href="#">
                <Link to="/newrealease" className="link">
                  New Releases
                </Link>
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search"
              onChange={(e) => (
                e.preventDefault(),
                searchShoe(document.getElementById("search").value)
              )}
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={(e) => (
                e.preventDefault(),
                searchShoe(document.getElementById("search").value)
              )}
            >
              Search
            </button>
          </form>

          <Link
            to={{
              pathname: "/cart",
              state: { cart }
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="myicon" />
          </Link>
          <span class="badge badge-warning" id="lblCartCount">
            {count}
          </span>
        </div>
      </nav>
    </div>
  );
}
