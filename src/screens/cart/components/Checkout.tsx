import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Box, Button, Text} from '@components';

import {creditCards} from '@core/content';
import Card from './card/Card';
import Add from './card/Add';
import {CARD_HEIGHT} from './card/Layaout';

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({label, value}: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="s">
      <Box flex={1}>
        <Text color="background" variant="h3">
          {label}
        </Text>
      </Box>
      <Box>
        <Text color="primary" variant="h3">
          ${value}
        </Text>
      </Box>
    </Box>
  );
};

interface CheckoutProps {
  minHeight: number;
}

const Checkout = ({minHeight}: CheckoutProps) => {
  const [selecteCard, setSelectedCard] = useState<number>(creditCards[0].id);
  return (
    <Box flex={1} backgroundColor="secondary" style={{paddingTop: minHeight}}>
      <Box padding="m" flex={1}>
        <Box height={CARD_HEIGHT}>
          <ScrollView horizontal>
            <Add onPress={() => {}} />
            {creditCards.map(card => (
              <Card
                {...{card}}
                key={card.id.toString()}
                selected={selecteCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="m">
          <Text color="background" variant="h3">
            Delivery Address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="background">Unit 15, York Farm Business Centre</Text>
              <Text color="background">Watling St, Towcester</Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background" textAlign="right">
                Change
              </Text>
            </Box>
          </Box>
          <LineItem label="Total Items (6)" value={189.94} />
          <LineItem label="Standard Delivery" value={12} />
          <LineItem label="Total Payment" value={201.84} />
        </Box>
        <Box
          paddingVertical="l"
          alignItems="center"
          flex={1}
          justifyContent="flex-end">
          <Button label="Pay $201.84" variant="primary" onPress={() => {}} />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
