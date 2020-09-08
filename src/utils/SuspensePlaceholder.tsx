import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

function SuspensePlaceholder() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    }),
  );
  const classes = useStyles();

  return (
    <div className={'grid-center'}>
      <div className={'flex-center'}>
        <h2>Loading..</h2> <CircularProgress className={classes.root} />
      </div>
    </div>
  );
}

export default SuspensePlaceholder;
