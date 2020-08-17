import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBBtn } from "mdbreact";
import axios from "axios"; 

export class test extends Component {

    constructor(props) {
        super(props);
          this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    render() {
        return (
        <MDBContainer>
        <h2>Search for a food item to add to your fridge!</h2>
        <form 
          className="needs-validation"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <MDBInput
             
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            id="defaultFormRegisterPasswordEx4"
            className="form-control"
            name="food item"
            label="Search here!"
            
          >
            <MDBBtn color="green" className="m-1 px-3 py-2" type="submit">
              Search for food item
            </MDBBtn>
            <div className="invalid-tooltip">Please enter a food item.</div>
          </MDBInput>
        </form>
        </MDBContainer>
        )
    }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.props.isAuth);
  }
  // Kick off add ingredient function on submit
  handleSubmit(event) {
    this.getRecipe();
    event.preventDefault();
  }

    // Get recipe function
    getRecipe = () => {
    // Make a string of items to pass into API get request
    let recipeString = this.state.value;
    console.log(recipeString);
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

export default test
