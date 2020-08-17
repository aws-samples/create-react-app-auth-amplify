import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBBtn } from "mdbreact";
import axios from "axios"; 
import { connect } from "react-redux"; 

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
  // Kick off add product function on submit
  handleSubmit(event) {
    this.getProduct();
    event.preventDefault();
  }

    // Get recipe function
    getProduct = () => {
    // Make a string of items to pass into API get request
    let productString = this.state.value;
    console.log(productString);
    return axios(
      `https://api.spoonacular.com/food/products/search?query=${productString}&apiKey=5c87fc7501454e29ad5a56bb45d581bd&number=20`
    )
      .then((response) => {
        // Dispatches the action to redux
        console.log(response.data.products);
        this.props.getProduct(response.data.products);
        // Clear the recipeString after submit
        productString = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

}

function mapStateToProps(state) {
  return {
    items: state.items,
    products: state.products,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipe: function (products) {
      dispatch({ type: "GET_PRODUCT", payload: products });
    },
    addProduct: function (product) {
      dispatch({ type: "ADD_PRODUCT", payload: product });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(test)
