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
import AllNotes from "./AllNotes";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
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
  }


  render() {
    const { onEdit } = this.props;
    return (
      <>
        <div className="content">
          
          <Row>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <Button
                  color="info"
                  >
                  Fetch Mare Status
                  </Button>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Mare</th>
                        <th>Camera</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-toggle="collapse" data-target="#folder1">
                        <td>Rachel</td>
                        <td>90</td>
                        <td>11/18/2020</td>
                        <td>19-20-02</td>
                        <td>Standing</td>
                      </tr>
                      <tr>
                        <td>Raven</td>
                        <td>100</td>
                        <td>11/18/2020</td>
                        <td>19-20-02</td>
                        <td>Laying down</td>
                      </tr>
                      <tr>
                        <td>Rhiannon</td>
                        <td>102</td>
                        <td>11/18/2020</td>
                        <td>19-20-02</td>
                        <td>Laying down</td>
                      </tr>
                      <tr>
                        <td>Sassy</td>
                        <td>110</td>
                        <td>11/18/2020</td>
                        <td>19-20-02</td>
                        <td>Pacing</td>
                      </tr>
                      <tr>
                        <td>Belle</td>
                        <td>120</td>
                        <td>11/18/2020</td>
                        <td>19-20-02</td>
                        <td>Standing</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card className="card-tasks">
                  <Router>
                    <div>
                        <CardHeader>
                          <h6 className="title d-inline">Logs</h6>
                          <p className="card-category d-inline"> today</p>
                          <Link to="/newnote">
                          <Button
                            className="float-right"
                            color="link"
                          >
                            <i className="tim-icons icon-simple-add btn"></i>
                          </Button>
                          </Link>
                        </CardHeader>
                    </div>
                    <CardBody>
                    <div className="navbar-end">
                          <Link to="/" className="navbar-item float-center">
                            <Button color="white">Display Logs</Button>
                          </Link>
                    </div>
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
