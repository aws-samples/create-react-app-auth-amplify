import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Badge, Grid } from "@material-ui/core";
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

export default function SimpleCard() {
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
          <Typography variant="h5" component="h2">
            WorkFlow 1
          </Typography>
          <Grid container item>
            <Typography variant="h6" component="h6">
              Completed
            </Typography>
            <Fab size="small" color="secondary" aria-label="add">
              <CheckIcon />
            </Fab>
          </Grid>
        </CardContent>
      </Card>
    </Badge>
  );
}
