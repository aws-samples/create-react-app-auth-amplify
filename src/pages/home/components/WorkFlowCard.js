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
import { indexOf } from "lodash";

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
  statusButton: {
    background: (props) => props.statusColor,
    "&:hover": {
      background: (props) => props.statusColor,
    },
  },
});
const statusColor = ["", "green"];
const statusMessage = ["pending", "completed"];
export default function WorkFlowCard({
  workFlowName,
  handleDeleteWorkflow,
  isAllCompleted,
  updateWorkFlowStatus,
  status: currentStatusMessage,
}) {
  const [status, setStatus] = useState(
    indexOf(statusMessage, currentStatusMessage)
  );

  const classes = useStyles({ statusColor: statusColor[status] });
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
              <Typography>{statusMessage[status].toUpperCase()}</Typography>
              <Fab size="small" className={classes.statusButton}>
                <Checkcon
                  onClick={() => {
                    isAllCompleted && setStatus((prev) => (prev + 1) % 2);
                    isAllCompleted &&
                      updateWorkFlowStatus(statusMessage[(status + 1) % 2]);
                  }}
                />
              </Fab>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Badge>
  );
}
