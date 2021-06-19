import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Button, Text} from '../../../components';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="h2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 24,
  },
  subtitle: {
    marginBottom: 12,
  },
  description: {
    marginBottom: 32,
    textAlign: 'center',
  },
});

export default Subslide;
