import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBBtn } from "mdbreact";

export class test extends Component {
    render() {
        return (
            <div>
            <MDBContainer>
        <h2>Search for a food item to add to your fridge!</h2>
        <form 
          className="needs-validation"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <MDBInput
            material 
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            id="defaultFormRegisterPasswordEx4"
            className="form-control"
            name="food item"
            label="Search here!"
            required
          >
            <MDBBtn color="green" className="m-1 px-3 py-2" type="submit">
              Search for food item
            </MDBBtn>
            <div className="invalid-tooltip">Please enter a food item.</div>
          </MDBInput>
        </form>
      </MDBContainer> */
            </div>
        )
    }
}

export default test
