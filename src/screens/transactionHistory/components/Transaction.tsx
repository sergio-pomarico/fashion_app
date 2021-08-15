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
    <Box
      marginTop="l"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={transaction.color}
            width={dotSize}
            height={dotSize}
            marginRight="s"
            style={{borderRadius: dotSize / 2}}
          />
          <Text variant="h3">{`#${transaction.id}`}</Text>
        </Box>
        <Text>{`$${transaction.value} - ${new Date(
          transaction.date,
        ).toLocaleDateString()}`}</Text>
      </Box>
      <Box>
        <Text color="secondary" variant="button">
          See more
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
