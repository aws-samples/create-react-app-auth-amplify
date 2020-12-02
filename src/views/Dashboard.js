/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import jQuery from 'jquery';
import AllNotes from "./AllNotes";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
import AllMares from "./AllMares";
import NewMare from "./NewMare";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  CardFooter
} from "reactstrap";
import { FormLabel, Form} from "react-bootstrap";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       inputs: ['input-0']
    }
    this.newTaskName = "";
    this.newTaskDesc = "";
  }

  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  };

  runPyScript() {
    jQuery.ajax({
      url: "../../amplify/backend/imageProcessing/pullPhoto.py",
      success: function() {
     alert('python script completed');;
    }
  });
}


  render() {
    const { onEdit } = this.props;
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <Router>
                    <div>
                        <CardHeader>
                          <Link to="/allmares">
                            <Button
                              className="float-left"
                              color="white"
                            >
                            Display Mares
                            </Button>
                          </Link>
                          <Link to="/newmare">
                          <Button
                            className="float-right"
                            color="white"
                          >
                          Fetch Mare
                          </Button>
                          </Link>
                        </CardHeader>
                      </div>
                      <CardBody>
                        <Route>
                          <Route path= "/allmares" component={AllMares} />
                          <Route path= "/newmare" component={NewMare} />
                        </Route>
                      </CardBody>
                </Router>
              </Card>
            </Col>

            <Col>
              <Row>
                <Col>
                  <Card>
                  <Router>
                    <div>
                        <CardHeader>
                          <Link to="/newnote" className="navbar-item float-right">
                            <Button color="white">Add Log</Button>
                          </Link>
                          <div className="navbar-end">
                            <Link to="/" className="navbar-item float-left">
                              <Button color="white">Display Logs</Button>
                            </Link>
                          </div>
                        </CardHeader>
                    </div>
                    <CardBody>
                      <Route>
                        <Route path="/newnote" component={NewNote} />
                        <Route exact path="/" component={AllNotes} />
                        <Route path="/note/:id" component={EditNote} />
                      </Route>
                    </CardBody>
                  </Router>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
