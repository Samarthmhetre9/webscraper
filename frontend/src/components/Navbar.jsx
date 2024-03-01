import React from "react";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";
import heart from "../assets/icons/black-heart.svg";
import user from "../assets/icons/user.svg";

const images = [
  { src: search, alt: "search" },
  { src: heart, alt: "heart" },
  { src: user, alt: "user" },
];

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand font-weight-bold" href="/">
          <h3>
            <img
              src={logo}
              alt="Logo"
              width={30}
              height={30}
              className="d-inline-block align-text"
            />
            &nbsp; Price<span className="text-danger">Wise</span>
          </h3>
        </a>
        <div className="text-align-right px-5">
          {images.map((image) => {
            return (
              <img alt={image.alt} src={image.src} height={30} width={30} className="mx-2" />
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
