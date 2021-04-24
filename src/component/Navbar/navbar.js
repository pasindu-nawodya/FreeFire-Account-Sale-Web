import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "./ff.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand ">
          <Link to="/">
            <img
              src={logo}
              style={{ width: "50px", marginRight: "10px" }}
              alt="heroic"
            />            
            <b>Accounts.LK</b>
            </Link>
            <br />
          </div>
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
            <ul className="navbar-nav mr-auto"></ul>
            <form className="form-inline my-2 my-lg-0">
            <Link to="/freefire">
              <button type="button" className="btn btn-outline-light">
                Free Fire
              </button>
            </Link>
            </form>
            
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>

            <form className="form-inline my-2 my-lg-0">
            <Link to="/pubg">
              <button type="button" className="btn btn-outline-light">
                PUBG
              </button>
            </Link>
            </form>

            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>

            <form className="form-inline my-2 my-lg-0">
            <Link to="/form">
              <button type="button" className="btn btn-outline-danger">
                Sell Your Account
              </button>
            </Link>
            </form>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </nav>
        <div
          style={{
            backgroundColor: "#B83200",
            borderRadius: 0,
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
          role="alert"
        >
          <div
            style={{ fontSize: "15px", color: "white", textAlign: "center" }}
          >
            <b> Find your desired gaming account! </b>
          </div>
        </div>
      </div>
    );
  }
}
