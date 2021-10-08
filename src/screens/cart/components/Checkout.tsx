import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Box} from '@components';

import {creditCards} from '@core/content';
import Card from './card/Card';
import Add from './card/Add';

interface CheckoutProps {
  minHeight: number;
}

const Checkout = ({minHeight}: CheckoutProps) => {
  const [selecteCard, setSelectedCard] = useState<number>(creditCards[0].id);
  return (
    <Box flex={1} backgroundColor="secondary" style={{paddingTop: minHeight}}>
      <Box padding="m" flex={1}>
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
    </Box>
  );
};

export default Checkout;
