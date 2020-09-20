import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkcon from "@material-ui/icons/Check";

import { Badge, Grid, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";

import {} from "module";
const useStyles = makeStyles({
  root: {
    width: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WorkFlowCard({ workFlowName }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Badge
      badgeContent={
        <Fab size="small" color="secondary" aria-label="add">
          <DeleteIcon />
        </Fab>
      }
    >
      <Card className={classes.root}>
        <CardContent>
          <Grid spacing={3} direction="column" container>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Workflow Name"
                variant="outlined"
                fullWidth
                disabled
                value={workFlowName}
              />
            </Grid>
            <Grid item container direction="row">
              <Typography>Completed</Typography>
              <Fab size="small">
                <Checkcon />
              </Fab>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Badge>
  );
}
