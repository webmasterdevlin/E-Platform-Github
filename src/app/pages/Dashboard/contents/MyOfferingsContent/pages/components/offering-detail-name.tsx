import React from 'react';
import { Box } from '@material-ui/core';

type Props = {
  name: string;
  icon?: string;
};

const OfferingDetailName: React.FC<Props> = ({ name, icon }) => (
  <Box fontWeight={'bold'} color={'#333'} fontSize={'2rem'}>
    {name} <i className={icon} />
  </Box>
);

export default OfferingDetailName;
