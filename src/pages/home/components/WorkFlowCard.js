import React, { useState } from "react";
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

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WorkFlowCard({ workFlowName, handleDeleteWorkflow }) {
  const classes = useStyles();
  const [showDelete, setShowDelete] = useState(false);

  return (
    <Badge
      badgeContent={
        showDelete && (
          <Fab
            onClick={handleDeleteWorkflow}
            size="small"
            color="secondary"
            aria-label="add"
          >
            <DeleteIcon />
          </Fab>
        )
      }
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
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
            <Grid item container direction="row" justify="space-between">
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
