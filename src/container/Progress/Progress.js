import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';

const CircularIndeterminate = (props) => {
  const { classes } = props;

  return (
    <CircularProgress className={classes.progress} size={30} />
  );
}

export default withStyles(styles)(CircularIndeterminate);
