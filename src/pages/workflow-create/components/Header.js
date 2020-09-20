import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  linkButton: {
    textDecoration: "none",
  },
}));

const Header = ({ handleAddNode }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            size="small"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<AddIcon />}>
            Shuffle
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<AddIcon />}>
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
          <Button variant="contained" startIcon={<AddIcon />}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
