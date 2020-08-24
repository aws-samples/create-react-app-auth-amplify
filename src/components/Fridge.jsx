import React, { useEffect, Component } from "react";
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
      // items: [],
    };
  }
  // After loading users fridge, load all their database items and render to screen
  componentDidMount() {
    if (this.props.user) {
      this.getFridge();
    }
  }

  getFridge() {
    console.log('test')
    let apiName = 'globalindextest';
    let path = '/fridgeitems&id=1';
    // let myInit = {
    //   queryStringParameters: {
    //     username: 'nick'
    //   }
    // }
  
    API.get(apiName, path)
    .then(response => {
      console.log(response)
      this.getProducts(response)
      // this.setState({ items: response.data })
    })
    .catch(error => {
      console.log(error.response)
    })

    // API.get(apiName, path, myInit)
    //   .then(response => {
    //     console.log(response)
    //     this.getProducts(response)
    //     // this.setState({ items: response.data })
    //   })
    //   .catch(error => {
    //     console.log(error.response)
    //   })
  }

  // Delete item from fridge
  onDelete(item) {
    const product = {
      id: item.id,
    };
    // axiosWithAuth("/delete", product, "DELETE").then((res) => {
    //   console.log(res.data);
    // });
    // axiosBearer("/userItems").then((res) => {
    //   console.log(res.data);
    //   this.setState({ items: res.data });
    // });
  }

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
    clearRecipes: function () {
      dispatch({ type: "RESET_RECIPES" });
    },
    getProducts: function (products) {
      dispatch({ type: "GET_PRODUCTS", payload: products });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
