import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Box, Text} from '@components';

interface CategoryProps {
  category: {
    id: string;
    title: string;
    color: string;
  };
}

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

const Category = ({
  category: {title, color: backgroundColor},
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <Box alignItems="center" marginLeft="m" marginTop="s">
      <TouchableOpacity
        delayPressOut={100}
        onPress={() => setSelected(prev => !prev)}
        style={styles.container}>
        {selected && (
          <View style={[styles.border, {borderColor: backgroundColor}]} />
        )}
        <View
          style={{
            width: INNER_RADIUS * 2,
            height: INNER_RADIUS * 2,
            borderRadius: INNER_RADIUS,
            backgroundColor,
          }}
        />
      </TouchableOpacity>
      <Text marginTop="s" textAlign="center">
        {title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: OUTER_RADIUS * 2,
    height: OUTER_RADIUS * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    ...(StyleSheet.absoluteFillObject as object),
    borderRadius: OUTER_RADIUS,
    borderWidth: 1,
  },
});

export default Category;
