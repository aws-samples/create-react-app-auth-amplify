import React from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { notify } from "react-notify-toast";
import {
  Alert,
  Button,
  Card,
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
const NOTES_QUERY = gql`
  {
    allNotes {
      title
      content
      _id
      date
    }
  }
`;

const DELETE_NOTE_QUERY = gql`
  mutation deleteNote($_id: ID!) {
    deleteNote(_id: $_id) {
      title
      content
      _id
      date
    }
  }
`;

const AllNotes = () => {
  const { loading, error, data } = useQuery(NOTES_QUERY);

  const [deleteNote] = useMutation(DELETE_NOTE_QUERY, {
    update(
      cache,
      {
        data: { deleteNote }
      }
    ) {
      const { allNotes } = cache.readQuery({ query: NOTES_QUERY });
      const newNotes = allNotes.filter(note => note._id !== deleteNote._id);

      cache.writeQuery({
        query: NOTES_QUERY,
        data: { allNotes: newNotes }
      });
    }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container m-t-20">

      <div className="allnotes-page">
        <div className="columns is-multiline">
          {data.allNotes.map(note => (
            <div className="column is-one-third" key={note._id}>
              <Card className="bg-info"border="success">
                <Table>
                <thead>
                <CardHeader>
                    <h4>{note.title} </h4>
                </CardHeader>
                </thead>
                <td>
                <div className="card-content">
                  <div className="content">
                    <p>{note.content}</p>
                  </div>
                </div>
                </td>
                </Table>
                <footer className="card-footer">
                <Button
                    color="dark"
                    onClick={e => {
                      e.preventDefault();
                      deleteNote({ variables: { _id: note._id } });
                      alert("Log deleted successfully!");
                    }}
                    className="card-footer-item float-right"
                  >
                  <i className="tim-icons icon-trash-simple" />
                  </Button>
                  <Link to={`note/${note._id}`} className="card-footer-item float-right">
                    <Button
                      outline color="info"
                      color="dark"
                    >
                    <i className="tim-icons icon-pencil" />
                    </Button>
                  </Link>
                </footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNotes;