import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Button } from "react-bootstrap";

//this component no longer needed. Combined with SearchForm.

class GroceryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Conditional statement: if ingredient array is populated, generate a find items button
  render() {
    if (this.props.items.length > 0) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.props.items.length >= 1 && (
            // Generate clear screen button after recipes are generated
            <Button variant="outline-green" onClick={this.handleSubmit}>
              Click to find items
            </Button>
          )}
        </div>
      );
    } else return null;
  }

  // Kick off the find recipe function on submit
  handleSubmit = (event) => {
    // Convert the ingredient array into a string for Axios get request
    this.getRecipe();
    event.preventDefault();
  };

  // Get recipe function
  getRecipe = () => {
    // Make a string of items to pass into API get request
    let recipeString = this.props.items.join(",");
    console.log(recipeString);
    console.log('test with hidden key')
    return axios(
      `https://api.spoonacular.com/food/products/search?query=${recipeString}&apiKey=5c87fc7501454e29ad5a56bb45d581bd&number=20`
    )
      .then((response) => {
        // Dispatches the action to redux
        console.log(response.data.products);
        this.props.getRecipe(response.data.products);
        // Clear the recipeString after submit
        recipeString = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Pass in recipes to redux store (this is an array of recipes)
    // It's passed in as a payload that contains all the data
    getRecipe: function (items) {
      dispatch({ type: "GET_RECIPE", payload: items });
    },
  };
}

function mapStateToProps(state) {
  return {
    items: state.items,
    recipes: state.recipes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItem);
