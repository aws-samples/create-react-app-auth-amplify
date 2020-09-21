import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import Filter from "./Filter";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  linkButton: {
    textDecoration: "none",
  },
  searchInput: {
    borderRadius: 26,
  },
}));

const Header = ({ handleSearchText }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            size="small"
            id="outlined-basic"
            label="Search Workflow"
            variant="outlined"
            onChange={handleSearchText}
          />
        </Grid>
        <Grid item>
          <Filter />{" "}
        </Grid>
        <Grid item style={{ marginLeft: "auto" }}>
          <Link className={classes.linkButton} to="/workflow/create">
            <Button variant="contained" startIcon={<AddIcon />}>
              Create Workflow
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
