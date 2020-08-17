import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBBtn } from "mdbreact";

export class test extends Component {

    constructor(props) {
        super(props);
          this.state = {};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
}

export default test
