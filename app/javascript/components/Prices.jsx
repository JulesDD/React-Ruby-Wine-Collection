import React from "react";
import { Link } from "react-router-dom";

export default class Prices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: {price: ""}};

    // You also bound an addHtmlEntities method to this so it can be accessible within the component.
    // The addHtmlEntities method will be used to replace character entities with HTML entities in the component.
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  // In order to find a particular recipe, your application needs the id of the recipe.
  // This means your Recipe component expects an id param.
  //  You can access this via the props passed into the component.
  componentDidMount() {
    const { match:{params:{id}}} = this.props;
    const url = '/api/v1/show/${id}';
    fetch(url)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ recipe: response }))
      .catch(() => this.props.history.push("/collection"));
  }

  addHtmlEntities(str) {
  return String(str)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
  }

  render() {
    const { collection } = this.state;
    let priceList = "No prices available";

    if (collection.price.length > 0) {
      priceList = collection.price
        .split(",")
        .map((price, index) => (
          <li key={index} className="list-group-item">
            {price}
          </li>
        ));
    }
    const priceAquired = this.addHtmlEntities(collection.price);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={collection.image}
            alt={`${collection.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {collectiion.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Ingredients</h5>
                {priceList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Price List</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${priceAquired}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Delete Prices
              </button>
            </div>
          </div>
          <Link to="/recipes" className="btn btn-link">
            Back to Collectiion
          </Link>
        </div>
      </div>
    );
  }
}