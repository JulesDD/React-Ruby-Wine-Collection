import React from "react";
import { Link } from "react-router-dom";

export default class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/collection/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ collection: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { collection }=this.state;
    const allCollection = collection.map((prices, index ) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={collection.image}
            className="card-img-top"
            alt={'${collection.name} image'}
            />
          <div className="card-body">
              <h5 className="card-title">{collection.name}</h5>
              <Link to={'/collection/${collection.id}'} className="btn custom-button">View Collection</Link>
          </div>
        </div>
      </div>
    ));

    const noCollection = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No wine as yet. Why not <Link to="/new_collection">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Wine for every occasion</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular wines around the world, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/recipe" className="btn custom-button">
                Add new Wine to collection.
              </Link>
            </div>
            <div className="row">
              {collection.length > 0 ? allCollection : noCollection}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}