import React from 'react';
import { Link } from 'react-router-dom';

export default class NewCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  // Adding highlighted lines to the NewCollection
  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/collection/create";
    const { name, price } = this.state;

    if (name.length == 0 || price.length == 0)
      return;
    const body = {
      name,
      price: price.replace(/\n/g, "<br><br>")
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url,{
      method:"POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/collection/${response.id}`))
      .catch(error => console.log(error.message));
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new Wine item to the collection.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Wine name</label>
                <input
                  type="text"
                  name="name"
                  id="recipeName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Price</label>
                <input
                  type="text"
                  name="ingredients"
                  id="recipeIngredients"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                <button type="submit" className="btn custom-button mt-3">
                  Create Recipe
                </button>
                <Link to="/recipes" className="btn btn-link mt-3">
                  Back to recipes
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}