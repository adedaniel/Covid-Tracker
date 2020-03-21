// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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

  <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div className="container container-s">
      <a className="navbar-brand" href="#">
        {siteTitle}
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
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#reviews">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#pricing">
              Pricing
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto navbar-right">
          <li className="nav-item">
            <a className="btn-cta nav-link js-scroll-trigger" href="#signup">
              Sign Up
            </a>
          </li>

          <li className="nav-item">
            <a className="btn-cta nav-link js-scroll-trigger" href="#signup">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{``}</style>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
