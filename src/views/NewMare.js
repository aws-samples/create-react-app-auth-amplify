import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
    Button,
    Card,
    CardTitle,
    FormGroup,
    Input, 
    Badge,
    CardHeader
} from "reactstrap";

const NEW_MARE = gql`
  mutation createMare($name: String!, $camera: String!, $date: String!, $time: String!, $stat: String!) {
    createMare(input: { name: $name, camera: $camera, date: $date, time: $time, stat: $stat }) {
      _id
      name
      camera
      date
      time
      stat
    }
  }
`;

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

const NewMare = withRouter(({ history }) => {
  const [name, setName] = useState("test");
  const [camera, setCamera] = useState("");
  const [date, setDate] = useState("test");
  const [time, setTime] = useState("test");
  const [stat, setStat] = useState("test");

  const [createMare] = useMutation(NEW_MARE, {
    update(
      cache,
      {
        data: { createMare }
      }
    ) {
      const { allMares } = cache.readQuery({ query: MARES_QUERY });

      cache.writeQuery({
        query: MARES_QUERY,
        data: { allMares: allMares.concat([createMare]) }
      });
    }
  });

  return (
    <div className="container m-t-20">
      <CardHeader>
        <CardTitle tag="h4">Choose camera feed to fetch (under development): </CardTitle>
      </CardHeader>
      <div className="newnote-page m-t-20">
        <form
          onSubmit={e => {
            e.preventDefault();

            createMare({
              variables: {
                name,
                camera,
                date,
                time,
                stat
              }
            });
            history.push("/");
          }}
        >
          <div className="field">
            <Button
                className="btn btn-secondary float-center" 
                color="primary"
                onClick={e => setCamera("cam90")}
            >
            Cam_90
            </Button>
            <Button 
                className="btn btn-secondary float-right"
                color="primary"
                onClick={e => setCamera("cam100")}
            >
            Cam100
            </Button>
            <Button 
                className="btn btn-secondary float-right"
                color="primary"
                onClick={e => setCamera("cam102")}
            >
            Cam102
            </Button>
            <Button 
                className="btn btn-secondary float-left"
                color="primary"
                onClick={e => setCamera("cam110")}
            >
            Cam110
            </Button>
            <Button 
                className="btn btn-secondary float-right"
                color="primary"
                onClick={e => setCamera("cam112")}
            >
            Cam112
            </Button>
            <Button 
                className="btn btn-secondary float-left"
                color="primary"
                onClick={e => setCamera("cam120")}
            >
            Cam120
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default NewMare;