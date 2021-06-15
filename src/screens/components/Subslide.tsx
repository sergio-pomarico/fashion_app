import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
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
    color: '#0C0D34',
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    color: '#0C0D34',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
  },
});

export default Subslide;
