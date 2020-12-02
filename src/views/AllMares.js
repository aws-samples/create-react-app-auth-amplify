import React from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Col,
  Navbar,
  CardTitle,
  CardText,
  FormGroup,
  Input, 
  Badge,
  CardHeader,
  Table
} from "reactstrap";
const MARES_QUERY = gql`
  {
    allMares {
      name
      camera
      date
      time
      stat
      _id
    }
  }
`;

const DELETE_MARE_QUERY = gql`
  mutation deleteMare($_id: ID!) {
    deleteMare(_id: $_id) {
      name
      camera
      date
      time
      stat
      _id
    }
  }
`;

const AllMares = () => {
  const { loading, error, data } = useQuery(MARES_QUERY);

  const [deleteMare] = useMutation(DELETE_MARE_QUERY, {
    update(
      cache,
      {
        data: { deleteMare }
      }
    ) {
      const { allMares } = cache.readQuery({ query: MARES_QUERY });
      const newMares = allMares.filter(mare => mare._id !== deleteMare._id);

      cache.writeQuery({
        query: MARES_QUERY,
        data: { allMares: newMares }
      });
    }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container m-t-20">
      <div className="allnotes-page">
        <div className="columns is-multiline">
          {data.allMares.map(mare => (
            <div className="column is-one-third" key={mare._id}>
              <Card className="bg-info" border="success">
              <CardBody bord="success">
                  <Table>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Camera</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-toggle="collapse" data-target="#folder1">
                        <td>{mare.name}</td>
                        <td>{mare.camera}</td>
                        <td>{mare.date}</td>
                        <td>{mare.time}</td>
                        <td>{mare.stat}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllMares;