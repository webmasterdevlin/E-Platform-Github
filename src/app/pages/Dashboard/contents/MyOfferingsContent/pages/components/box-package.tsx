import React from 'react';
import { Box } from '@material-ui/core';

const BoxPackage = props => (
  <Box
    key={props.key}
    p={2}
    m={4}
    style={{
      backgroundColor: '#b3d4fc',
      borderRadius: '1rem',
    }}
    {...props}
  >
    {props.children}
  </Box>
);

export default BoxPackage;
