import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import ShuffleIcon from "@material-ui/icons/Shuffle";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  linkButton: {
    textDecoration: "none",
  },
}));

const Header = ({
  handleAddNode,
  handleSaveWorkFlow,
  setWorkflowName,
  handleDeleteNode,
  isAllTaskCompleted,
  hanldeShuffleNode,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            size="small"
            id="outlined-basic"
            label="workflow name"
            variant="outlined"
            onChange={({ target: { value } }) => setWorkflowName(value)}
          />
        </Grid>
        <Grid style={{ marginLeft: "auto" }} item>
          {isAllTaskCompleted && (
            <Button
              onClick={hanldeShuffleNode}
              variant="contained"
              startIcon={<ShuffleIcon />}
            >
              Shuffle
            </Button>
          )}
        </Grid>
        <Grid item>
          <Button
            onClick={handleDeleteNode}
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleAddNode}
            startIcon={<AddIcon />}
          >
            Add Node
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleSaveWorkFlow} variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
