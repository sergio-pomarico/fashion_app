import React from 'react';
import {ScrollView} from 'react-native';

import {Box, Text, CheckboxGroup, RoundedCheckboxGroup} from '@components';
import {colors, outfitType, preferredBrands, sizes} from '@core/content';
import {useTheme} from '@config/theme';

interface ConfigurationProps {}

const Configuration = ({}: ConfigurationProps) => {
  const theme = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.m,
        paddingBottom: theme.spacing.xl * 4,
      }}>
      <Box marginVertical="m">
        <Text variant="body">What type of outfit you usually wear?</Text>
      </Box>
      <CheckboxGroup options={outfitType} />
      <Box marginVertical="m">
        <Text variant="body">What is your clothing size?</Text>
      </Box>
      <RoundedCheckboxGroup options={sizes} />
      <Box marginVertical="m">
        <Text variant="body">My preferred clothing colors</Text>
      </Box>
      <RoundedCheckboxGroup options={colors} isValueColor />
      <Box marginVertical="m">
        <Text variant="body">My preferred brands</Text>
      </Box>
      <CheckboxGroup options={preferredBrands} />
    </ScrollView>
  );
};

export default Configuration;
