import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { colors } from "./styles/styles"
import { DefaultButton, OutlineButton } from "./button"
function Header({ siteTitle }) {
  const [topClass, setTopClass] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let activeClass = "past-main"
      if (window.scrollY === 0) {
        activeClass = ""
        console.log("past-main")
      }
      setTopClass(activeClass)
    })
  }, [])
  //  <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  return (
    <nav
      className={`navbar navbar-expand-md effect-main ${topClass} navbar-light bg-white fixed-top`}
    >
      <div className="container container-s">
        <a className="navbar-brand" href="#">
          <h4 className="m-0 logo">{siteTitle}</h4>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#products">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#features">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#reviews">
                Preferences
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
              <OutlineButton text="Login" color="primary" padding="7px 27px" />
            </li>
            &nbsp; &nbsp;
            <li className="nav-item">
              <DefaultButton
                text="Sign Up"
                color="primary"
                padding="7px 27px"
              />
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .logo {
          color: ${colors.primary};
        }
        .navbar-light .navbar-nav .nav-link {
          color: black;
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
      `}</style>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header
