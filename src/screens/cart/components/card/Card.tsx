import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {CreditCard, CardType} from '@core/content';

import {Box, Text} from '@components';

interface CardProps {
  card: CreditCard;
  selected: boolean;
  onSelect: () => void;
}

const visaLogo = require('../../../../assets/visa.png');
const masterCardLogo = require('../../../../assets/mastercard.png');

import Layout from './Layaout';

const Card = ({card, selected, onSelect}: CardProps) => {
  const isVisa = card.type === CardType.VISA;
  return (
    <Layout
      onPress={onSelect}
      backgroundColor={selected ? 'primary' : 'background'}>
      <Box flex={1} padding="m">
        <Image
          style={isVisa ? styles.visa : styles.masterCard}
          source={isVisa ? visaLogo : masterCardLogo}
        />

        <Text
          variant="h3"
          marginVertical="m"
          color={
            selected ? 'background' : 'text'
          }>{`**** ${card.last4Digits}`}</Text>
        <Text opacity={0.5} color={selected ? 'background' : 'text'}>
          Expiration
        </Text>
        <Text opacity={0.5} color={selected ? 'background' : 'text'}>
          {card.expiration}
        </Text>
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  visa: {
    height: 13,
    width: 39,
  },
  masterCard: {
    height: 20,
    width: 33,
  },
});

export default Card;
