import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBBtn } from "mdbreact";
import axios from "axios"; 
import { connect } from "react-redux"; 
import "./test.css";

export class test extends Component {

    constructor(props) {
        super(props);
          this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    
    render() {
        return (
        <MDBContainer className="test">
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
    this.getProducts();
    event.preventDefault();
  }

    // Get recipe function
    getProducts = () => {
      console.log(this.props.user)
    // Pass product as string into API get request
    let productString = this.state.value;
    console.log(productString);
    // Consider modifying this to add options, like a calorie range slider.
    return axios({
        "method":"GET",
        "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
        "useQueryString":true
        },"params":{
        "offset":"0",
        "number":"20",
        "query": `${productString}`
        }
        })
      .then((response) => {
        // Dispatches the action to redux
        console.log(response.data.products);
        this.props.getProducts(response.data.products);
        // Clear the productString after submit
        productString = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };

}

function mapStateToProps(state) {
  return {
    // items are user fridge contents from database. Not in use yet
    items: state.items,
    // Products refer to the product array from the API
    products: state.products,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: function (products) {
      dispatch({ type: "GET_PRODUCTS", payload: products });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(test)
