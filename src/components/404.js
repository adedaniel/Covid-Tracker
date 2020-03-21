import React from "react"
import { OutlineButton } from "./button"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <div className="container captionParent vh100">
      <div className="captionArea">
        <h1>Oh Well...</h1>
        <h5>
          You just hit a route that hasn't been created yet or maybe has already
          been deleted
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
  )
}
