import {Box} from '@components';
import React from 'react';

interface OutfitProps {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
  };
  width: number;
}

const Outfit = ({
  outfit: {color: backgroundColor, aspectRatio},
  width,
}: OutfitProps) => {
  return (
    <Box
      borderRadius="m"
      marginBottom="m"
      style={{backgroundColor, height: aspectRatio * width, width}}
    />
  );
};

export default Outfit;
