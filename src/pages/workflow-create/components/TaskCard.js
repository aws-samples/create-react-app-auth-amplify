import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Badge, Grid } from "@material-ui/core";
import Checkcon from "@material-ui/icons/Check";
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
  statusButton: {
    background: (props) => props.statusColor,
    "&:hover": {
      background: (props) => props.statusColor,
    },
  },
});
const statusColor = ["", "blue", "green"];
const statusMessage = ["pending", "progress", "completed"];
export default function TaskCard({
  updateTaskTitle,
  updateTaskDescription,
  updateTaskStatus,
  canBeCompleted,
}) {
  const [status, setStatus] = useState(0);
  const numberModulo = canBeCompleted ? 3 : 2;
  const classes = useStyles({ statusColor: statusColor[status] });
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Badge
      badgeContent={
        <Fab
          onClick={() => {
            setStatus((prev) => (prev + 1) % numberModulo);
            updateTaskStatus(statusMessage[(status + 1) % numberModulo]);
          }}
          size="small"
          className={classes.statusButton}
          aria-label="add"
        >
          <Checkcon />
        </Fab>
      }
    >
      <Card className={classes.root}>
        <CardContent>
          <Grid spacing={3} direction="column" container>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Task Name"
                variant="outlined"
                fullWidth
                onChange={updateTaskTitle}
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-multiline-flexible"
                label="Task Description"
                multiline
                rowsMax={4}
                variant="outlined"
                fullWidth
                rows={4}
                onChange={updateTaskDescription}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Badge>
  );
}
