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

const NEW_NOTE = gql`
  mutation createNote($title: String!, $content: String!) {
    createNote(input: { title: $title, content: $content }) {
      _id
      title
      content
      date
    }
  }
`;

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

const NewNote = withRouter(({ history }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [createNote] = useMutation(NEW_NOTE, {
    update(
      cache,
      {
        data: { createNote }
      }
    ) {
      const { allNotes } = cache.readQuery({ query: NOTES_QUERY });

      cache.writeQuery({
        query: NOTES_QUERY,
        data: { allNotes: allNotes.concat([createNote]) }
      });
    }
  });

  return (
    <div className="container m-t-20">
      <CardHeader>
        <CardTitle tag="h4">Create New Log</CardTitle>
      </CardHeader>
      <div className="newnote-page m-t-20">
        <form
          onSubmit={e => {
            e.preventDefault();

            createNote({
              variables: {
                title,
                content,
                date: Date.now()
              }
            });
            history.push("/");
          }}
        >
          <div className="field">
            <FormGroup>
                <label className="label"><Badge color="primary">Log Title</Badge></label>
                <div className="control">
                <Input
                    className="input"
                    name="title"
                    type="text"
                    placeholder="Log Title here..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                </div>
            </FormGroup>
          </div>

          <div className="field">
            <FormGroup>
            <label className="label"><Badge color="primary">Content</Badge></label>
                <div className="control">
                <Input
                    cols="80"
                    rows="4"
                    type="textarea"
                    className="textarea"
                    name="content"
                    placeholder="Log Content here..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                </div>
            </FormGroup>
          </div>
          <div className="field">
            <div className="control">
                <Button
                        className="btn btn-secondary float-right"
                        color="success"
                        >
                        Save
                </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default NewNote;