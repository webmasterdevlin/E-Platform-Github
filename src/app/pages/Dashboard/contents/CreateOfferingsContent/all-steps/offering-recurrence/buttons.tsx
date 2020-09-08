import React from 'react';
import { Button, Typography, useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';

const Buttons = () => {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:720px)');

  return (
    <div>
      <Button variant={'contained'} color={'primary'}>
        Ok
      </Button>
      <Button variant={'outlined'} color={'primary'}>
        Cancel
      </Button>
      <Button variant={'text'} color={'primary'}>
        Remove Recurrence
      </Button>
    </div>
  );
};

export default Buttons;
