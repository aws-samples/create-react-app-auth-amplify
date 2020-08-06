import React from "react";
import fridge from "./assets/fridge-QKKKFUJ.jpg";
import feature1 from "./assets/cutlery_64px.png";
import feature2 from "./assets/mobile_64px.png";
import feature3 from "./assets/ingredients_80px.png";
import recipeFeature from "./assets/recipe-feature.jpg";
import notificationFeature from "./assets/notification-feature.jpg";
import foodWasteFeature from "./assets/food-waste-feature.jpg";
import "./FullPageIntroWithFixedNavbar.css";
import { connect } from "react-redux";

import {
  MDBContainer,
  MDBCardText,
  MDBCard,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';

class FullPageIntroWithFixedNavbar extends React.Component {
  componentDidMount() {
    this.props.clearRecipes();
  }
  render() {
    return (
      <div>
        <header>
          <MDBContainer className="text-black text-center">
            <MDBRow className="mx-auto my-auto text-center">
              <MDBCol className="header-padding my-auto" xs="12" sm="12" md="6">
                <h1>Food waste is a big problem.</h1>
                <h1>We can help.</h1>
                <br />
                <h5>
                  FridgeBuddy remembers when your food is about to expire so you
                  can waste less and eat more.{" "}
                </h5>
              </MDBCol>
              <MDBCol className="padding" xs="12" sm="12" md="6">
                <img src={fridge} className="img-fluid" alt="" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </header>

        <main>
          {/* Short summary of features */}
          <MDBContainer className="text-center my-5">
            <h2> Our features </h2>
            <br />
            <h5>
              FridgeBuddy makes it easy to track which food items are about to
              expire. Helpful reminders tell you when food will expire in your
              refrigerator, freezer, or pantries.
            </h5>

            <MDBRow className="mx-auto my-auto" style={{ paddingTop: "3rem" }}>
              <MDBCol xs="12" sm="12" md="4">
                <MDBCard className="padding align-items-center h-100">
                  <MDBCardImage className="img-fluid" src={feature1} alt="" />
                  <MDBCardBody>
                    <MDBCardTitle>Inventory Control</MDBCardTitle>
                    <MDBCardText>
                      Know what's in your kitchen from the ease of your mobile
                      device.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs="12" sm="12" md="4">
                <MDBCard className="padding align-items-center h-100">
                  <MDBCardImage className="img-fluid" src={feature2} alt="" />
                  <MDBCardBody>
                    <MDBCardTitle>Expiration Control</MDBCardTitle>
                    <MDBCardText>
                      Enter the expiration date of items to ensure they are used
                      before they go bad.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs="12" sm="12" md="4">
                <MDBCard className="padding align-items-center h-100">
                  <MDBCardImage className="img-fluid" src={feature3} alt="" />
                  <MDBCardBody>
                    {/* add in pro feature bar at the top */}
                    <MDBCardTitle>My Recipes</MDBCardTitle>
                    <MDBCardText>
                      Like to cook? Get recipe suggestions based on items you
                      saved in FridgeBuddy.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* How the feature looks when used */}
          <MDBContainer className="text-center my-5">
            <MDBRow className="mx-auto my-auto" style={{ paddingTop: "3rem" }}>
              <MDBCol size="6" className="mx-auto my-auto">
                <h2>Find your food</h2>
                <p>
                  Our easy to use search makes it simple to add food to your
                  Fridge
                </p>
              </MDBCol>
              <MDBCol size="6">
                <img className="img-fluid mx-auto" src={recipeFeature} alt="" />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-auto my-auto" style={{ paddingTop: "3rem" }}>
              <MDBCol size="6">
                <img
                  className="img-fluid mx-auto"
                  src={notificationFeature}
                  alt=""
                />
              </MDBCol>
              <MDBCol size="6" className="mx-auto my-auto">
                <h2>Access your Fridge on the go</h2>
                <p>
                  Add or remove food items and see what expires next from
                  anywhere
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-auto my-auto" style={{ paddingTop: "3rem" }}>
              <MDBCol size="6" className="mx-auto my-auto">
                <h2>Help end food waste</h2>
                <p>
                  40 million tons of food goes to waste in the United States
                  every year. By using FridgeBuddy, you can make a difference
                  and reduce the $161 billion of wasted food each year.
                </p>
              </MDBCol>
              <MDBCol size="6">
                <img
                  className="img-fluid mx-auto"
                  src={foodWasteFeature}
                  alt=""
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearRecipes: function () {
      dispatch({ type: "RESET_RECIPES" });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullPageIntroWithFixedNavbar);
