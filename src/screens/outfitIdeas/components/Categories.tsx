import React from 'react';
import {ScrollView, View} from 'react-native';
import {categories} from '@core/content';

import Category from './Category';

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <Category category={category} key={category.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
