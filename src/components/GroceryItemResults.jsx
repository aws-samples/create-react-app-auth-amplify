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
import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

class GroceryItemResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // SaveToFridge saves products to user's database.
  SaveToFridge = (item) => {
    let apiName = 'globalindextest'; 
    let path = '/fridgeitems';
    let date = new Date();
    API.post(apiName, path, {
      body: {
        id: uuidv4(),
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
    return (
      <MDBContainer>
        {this.props.products && (
          <MDBRow>
          {this.props.products.map((item) => {
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


          )
        }
        
      </MDBContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.fridge.products,
    user: state.fridge.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // clearResults: function () {
    //   dispatch({ type: "RESET_ITEM" });
    // },
    // clearProducts: function () {
    //   dispatch({ type: "RESET_PRODUCTS" });
    // },
    // addToFridge: (itemInfo) => dispatch(addToFridge(itemInfo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemResults);