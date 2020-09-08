import React from 'react';

import { Box } from '@material-ui/core';
type Props = {
  value: string;
};
const OfferingDetailValue: React.FC<Props> = ({ value }) => (
  <Box color={'#666'} fontSize={'2rem'}>
    {value}
  </Box>
);

export default OfferingDetailValue;
