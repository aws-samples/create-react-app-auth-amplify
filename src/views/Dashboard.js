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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  ButtonGroup,
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
  UncontrolledTooltip
} from "reactstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.newTaskName = "";
    this.newTaskDesc = "";
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
                  color="warning"
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
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Row>
                <Col lg="6" md="12">
                  <Card className="card-tasks">
                    <CardHeader>
                      <h6 className="title d-inline">Logs</h6>
                      <p className="card-category d-inline"> today</p>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          className="btn-icon"
                          color="link"
                          data-toggle="dropdown"
                          type="button"
                        >
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Something else
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </CardHeader>
                    <CardBody>
                      <Table>
                        <FormGroup>
                          heheh
                        </FormGroup>
                      </Table>
                    </CardBody>
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
