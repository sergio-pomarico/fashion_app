import React from 'react';

import {TransactionPoint} from '@core/types';
import {useTheme} from '@config/theme';
import {Box, Text} from '@components';

interface TransactionProps {
  transaction: TransactionPoint;
}

const Transaction = ({transaction}: TransactionProps) => {
  const theme = useTheme();
  const dotSize = theme.spacing.s * 2;
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box>
        <Box flexDirection="row" alignItems="center">
          <Box
            backgroundColor={transaction.color}
            width={dotSize}
            height={dotSize}
            marginRight="s"
            style={{borderRadius: dotSize / 2}}
          />
          <Text color="secondary">{`${transaction.id}`}</Text>
        </Box>
        <Text>{`$${transaction.value} - ${new Date(
          transaction.date,
        ).toLocaleDateString()}`}</Text>
      </Box>
      <Box>
        <Text color="secondary">See more</Text>
      </Box>
    </Box>
  );
};

export default Transaction;
