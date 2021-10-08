import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Box} from '@components';

import Layout from './Layaout';
import {useTheme} from '@config/theme';

interface AddProps {
  onPress: () => void;
}

const Add = ({onPress}: AddProps) => {
  const theme = useTheme();
  return (
    <Layout onPress={onPress}>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderRadius="m"
        borderColor="grey"
        borderWidth={0.5}>
        <Icon name="plus" color={theme.colors.background} size={32} />
      </Box>
    </Layout>
  );
};

export default Add;
