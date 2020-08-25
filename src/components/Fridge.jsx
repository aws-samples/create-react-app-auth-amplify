import React, { Component } from "react";
import { connect } from "react-redux";
// Import React components
import {
  MDBContainer,
  MDBCard,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBBtn
} from "mdbreact";
import "./FullPageIntroWithFixedNavbar.css";
import { API } from 'aws-amplify';

export class Fridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // After loading users fridge, load all their database items and render to screen
  componentDidMount() {
    this.getFridge();
  }

  getFridge() {
    let apiName = 'globalindextest';
    let path = '/fridgeitems';
    let params = {
      response: true,
      queryStringParameters: {
        username: 'nick'
      }
    }
  
    API.get(apiName, path, params)
    .then(response => {
      // There's a problem here, needs to be async redux
      const fridgeItems = response;
      this.getProducts(fridgeItems)
      console.log(fridgeItems)
      console.log(this.props.products)
      // this.setState({ items: response.data })
    })
    .catch(error => {
      console.log(error.response)
    })
  }
  

  // Delete item from fridge
  // To be implemented
  // onDelete(item) {
  //   const product = {
  //     id: item.id,
  //   };
  // }

  render() {
    return (
      <MDBContainer className="header-padding">
        <h2>Welcome to Your Fridge!</h2>
        <h5>Here is what's currently in your fridge.</h5>
        <MDBRow>
          {this.props.products.map((product) => {
            return (
              <MDBCol size="3" className="padding justify-content-center">
                <MDBCard className="card align-items-center padding h-100">
                  {product.product_name}
                  <MDBCardImage
                    className="img-fluid padding"
                    src={product.product_image}
                    alt=""
                  />
                  <MDBBtn
                    className="mt-auto"
                    color="red"
                    onClick={() => {
                      this.onDelete(product);
                      alert("This item was removed from your fridge");
                    }}
                  >
                    Remove item from fridge
                  </MDBBtn>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    products: state.products
  };
}

// This needs to clear for conditional rendering
function mapDispatchToProps(dispatch) {
  return {
    getProducts: function (fridgeItems) {
      dispatch({ type: "GET_PRODUCTS", payload: fridgeItems });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
