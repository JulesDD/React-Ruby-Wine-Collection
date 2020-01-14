import React from "react"
import {Link} from "react-router-dom"

export default class Home{

render() {
    return(
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <h1 className="display-4">Wine Collection</h1>
            <p className="lead">
              A collection of the best wine around the globe.
          </p>
            <hr className="my-4" />
            <Link
              to="/Collection"
              className="btn btn-lg custom-button"
              role="button"
            >
              View Collection
          </Link>
          </div>
        </div>
      </div>
    );
  }
}