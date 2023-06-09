import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import log from "../Images/logo1.png";
export default class Navbar extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      // #0665fb
      <nav className="NavbarItems bg-slate-900 p-10">
        <div className="flex">
          <img className="w-16 h-16" src={log} alt="Logo"/>
          <h1 className="text-4xl p-3 text-slate-100"><a href="/">MedLink</a></h1>
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            style={{color: "aliceblue"}}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link className={this.state.clicked ? "nav-links-new" : "nav-links"} to="/signup">
            <i className="fa-solid fa-user-plus"></i>
            Sign Up
          </Link>
        </ul>
      </nav>
    );
  }
}
