import React, {ReactNode} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Box} from '@components';
import {BoxProps} from '@shopify/restyle';
import {Theme} from '@config/theme';

interface LayoutProps {
  children: ReactNode;
  onPress: () => void;
  backgroundColor?: BoxProps<Theme>['backgroundColor'];
}

const Add = ({children, onPress, backgroundColor}: LayoutProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box
        borderRadius="m"
        height={160}
        marginLeft="m"
        width={120}
        {...{backgroundColor}}>
        {children}
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Add;
