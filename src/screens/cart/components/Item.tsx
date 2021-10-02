import React from 'react';

import {Box} from '@components';

interface ItemProps {}

const Item = ({}: ItemProps) => {
  return (
    <Box padding="m" flexDirection="row">
      <Box
        width={120}
        height={120}
        backgroundColor="drawer2"
        borderRadius="m"
      />
    </Box>
  );
};

export default Item;
