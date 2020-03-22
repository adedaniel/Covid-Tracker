import React from "react"
import { OutlineButton } from "./button"
import { Link } from "gatsby"
import NotFoundImageBackground from "./ImageExports/NotFoundImageBackground"

export default function NotFound() {
  return (
    <NotFoundImageBackground>
      <div className="container  ">
        <div className="row">
          <div className="col-md-6 captionParent vh100">
            <div className="captionArea">
              <h1>Oh Well...</h1>
              <h5>
                You just hit a route that hasn't been created yet or maybe has
                already been removed
              </h5>

              <h5>You can still go back home though...</h5>
              <br />
              <Link to="/">
                <OutlineButton
                  text="Go Home"
                  color="primary"
                  width="300px"
                  padding="7px 27px"
                  // width="75%"
                  font="larger"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <style jsx>{`
          .vh100 {
            height: calc(100vh - 60px);
          }
          .captionParent {
            display: table;
          }
          .captionArea {
            display: table-cell;
            vertical-align: middle;
          }
        `}</style>
      </div>
    </NotFoundImageBackground>
  )
}
