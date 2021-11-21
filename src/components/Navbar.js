import React from "react";
//import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#3366ff" }}
      >
        <h3>Estore</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto topnav">
            <li className="nav-item active">
              <select
                className="nav-link"
                value={props.value}
                onChange={(e) => props.handleChangeEvent(e)}
              >
                <option value="products">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
            </li>
            <li className="nav-item">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="nav-link"
                  type="search"
                  placeholder="Search Products"
                  aria-label="Search"
                ></input>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
