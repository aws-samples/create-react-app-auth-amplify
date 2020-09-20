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
import TextField from "@material-ui/core/TextField";

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

export default function TaskCard() {
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
                label="Outlined"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                variant="outlined"
                fullWidth
                rows={4}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Badge>
  );
}
