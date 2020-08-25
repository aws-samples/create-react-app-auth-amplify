import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBCard,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage,
} from "mdbreact";
// import { saveToFridge } from '../../amplify/backend/function/itemsLambda' 
import { API } from 'aws-amplify';
// import awsconfig from '../aws-exports'; 
import { uniqueId } from "lodash";
// API.configure(awsconfig); 

class GroceryItemResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // SaveToFridge refers to saving to database. addToFridge refers to the redux action.
  SaveToFridge = (item) => {
    console.log(item)
    let apiName = 'globalindextest'; 
    let path = '/fridgeitems';
    let date = new Date();
    console.log(date)
    API.post(apiName, path, {
      body: {
        id: uniqueId(),
        username: this.props.user.username,
        expiration: '1-22-2021',
        createdAt: date, 
        product_id: item.id,
        product_image: item.image,
        product_name: item.title,
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.response)
    });
  };
  render() {
    // Render each product as card
    const items = this.props.products;
    return (
      <MDBContainer>
        <MDBRow>
          {items.map((item) => {
            console.log(item.image)
            return (
              <MDBCol size="3" className="padding justify-content-center">
                {this.props.products.length > 1 && (
                  <MDBCard className="card align-items-center padding h-100">
                    {item.title}
                    <MDBCardImage
                      className="img-fluid padding"
                      src={item.image}
                    />
                    <MDBBtn
                      className="mt-auto"
                      color="green"
                      onClick={() => {
                        this.SaveToFridge(item);
                        alert("You added this item to your fridge!");
                      }}
                    >
                      Add to Fridge
                    </MDBBtn>
                  </MDBCard>
                )}
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
  // Clear ingredients on screen
  handleSubmit = (event) => {
    this.props.clearResults();
    event.preventDefault();
  };
  // Clear recipes on screen
  clearRecipes = (event) => {
    this.props.clearRecipes();
    event.preventDefault();
  };
}

function mapStateToProps(state) {
  return {
    products: state.products,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearResults: function () {
      dispatch({ type: "RESET_ITEM" });
    },
    clearProducts: function () {
      dispatch({ type: "RESET_PRODUCTS" });
    },
    addToFridge: function (itemInfo) {
      dispatch({ type: "ADD_ITEM_TO_FRIDGE", payload: itemInfo });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemResults);