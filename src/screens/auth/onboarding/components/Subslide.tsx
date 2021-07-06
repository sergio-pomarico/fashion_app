import React from 'react';
import {Button, Text, Box} from '@components';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <Box flex={1} alignContent="center" justifyContent="center" padding="l">
      <Text variant="h2" marginBottom="m">
        {subtitle}
      </Text>
      <Text variant="body" marginBottom="l" textAlign="center">
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </Box>
  );
};

export default Subslide;
