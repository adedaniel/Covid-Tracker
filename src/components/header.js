import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { colors } from "./styles/styles";
import { DefaultButton, OutlineButton } from "./button";
import LogoImage from "./ImageExports/LogoImage";
/* eslint jsx-a11y/anchor-is-valid: 0 */
function Header({ siteTitle }) {
  const [active, setActive] = useState(1)
  const [topClass, setTopClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let activeClass = "past-main";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      setTopClass(activeClass);
    });
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md effect-main ${topClass} navbar-light bg-white fixed-top`}
    >
      <div className="container container-s">
        <a className="navbar-brand" href="#">
          <h2 className="m-0 logo">

            {siteTitle}
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto navbar-right">
            <li className={`nav-item mx3 sidebarList ${
              active === 1 ? "active" : "inactive"
              }`} onClick={() => {
                setActive(1)
              }}>
              <a className="nav-link js-scroll-trigger" href="#">
                Home
          </a>
            </li>
            <li className={`nav-item mx3 sidebarList ${
              active === 2 ? "active" : "inactive"
              }`} onClick={() => {
                setActive(2)
              }}>
              <a className="nav-link js-scroll-trigger" href="#ncdc">
                NCDC
        </a>
            </li>

            <li className={`nav-item mx3 sidebarList ${
              active === 3 ? "active" : "inactive"
              }`} onClick={() => {
                setActive(3)
              }}>
              <a className="nav-link js-scroll-trigger" href="#international">
                International
              </a>
            </li>
            <li className={`nav-item mx3 sidebarList ${
              active === 4 ? "active" : "inactive"
              }`} onClick={() => {
                setActive(4)
              }}>
              <a className="nav-link js-scroll-trigger" href="#news">
                News
              </a>
            </li>
            <li className={`nav-item mx3 sidebarList ${
              active === 5 ? "active" : "inactive"
              }`} onClick={() => {
                setActive(5)
              }}>
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
            </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
        .nav-link {
          padding: 0 !important;
      }
   
        @media(min-width: 768px){
          .mx3{
            margin: 0 14px
          }
        }
       
        .sidebarList {
          width: fit-content;
          padding: 2px 0;
          list-style: none;
          border-bottom-width: 2px;
          border-bottom-color: transparent;
          border-bottom-style: solid;
          transition: all 0.5s;
        }
        .sidebarList a {
          text-decoration: none;
          color: ${colors.primary};
        }
        .sidebarList a h5 {
          margin: 0;
        }
        .sidebarList:hover::after {
          width: 100%;
        }
        .sidebarList.inactive::after {
          content: ""; /* This is necessary for the pseudo element to work. */
          display: block; /* This will put the pseudo element on its own line. */
          width: 0%; /* Change this to whatever width you want. */
          padding-top: 0px; /* This creates some space between the element and the border. */
          border-bottom: 2px solid ${colors.lightgrey}; /* This creates the border. Replace black with whatever color you want. */
          transition: all 0.7s;
        }
        .sidebarList.active a {
          color: ${colors.primary} !important;
        }
        .sidebarList.active {
          /* content: "";  This is necessary for the pseudo element to work. */
          display: block; /* This will put the pseudo element on its own line. */
          width: fit-content; /* Change this to whatever width you want. */
          padding-top: 0px; /* This creates some space between the element and the border. */
          border-bottom: 2px solid ${colors.primary}; /* This creates the border. Replace black with whatever color you want. */
          transition: all 0.7s;
        }
          .logo {
            color: ${colors.primary};
          }
          .navbar-light .navbar-nav .nav-link {
            color: black;
          }
          .navbar-toggler {
            border: none;
            outline: 0 !important;
          }
          .flex {
            flex-direction: row !important;
          }
          .bgPrimaryButton {
            background-color: ${colors.primary};
            color: white;
          }
          .btn {
            outline: none !important;
            box-shadow: none;
            border-radius: 25px;
          }
          .bgPrimaryButtonOutline {
            color: ${colors.primary};
            border-color: ${colors.primary};
            background-color: transparent;
          }
          .bgPrimaryButtonOutline:hover {
            color: ${colors.white};
            border-color: ${colors.primary};
            background-color: ${colors.primary};
          }

          .navbar.past-main {
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: rgba(255, 255, 255, 0.99) !important;
            -webkit-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
            -moz-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
            box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
          }

          .navbar.effect-main {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }

          .navbar.past-main .navbar-brand {
            color: #6d48e5 !important;
          }

          .nav-white.past-main .nav-item .nav-link {
            color: #364655;
            font-weight: 500;
          }

          .navbar.past-main .nav-item .nav-link {
            font-weight: 500;
          }

          .nav-white.past-main .navbar-brand {
            color: #364655;
          }

          .nav-white.effect-main {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }
        `}
      </style>
    </nav >
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};
export default Header;
