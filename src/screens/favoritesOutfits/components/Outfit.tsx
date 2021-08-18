import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, RoundedIcon} from '@components';

interface OutfitProps {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;
  };
  width: number;
}

const Outfit = ({outfit, width}: OutfitProps) => {
  const [selected, setSelected] = useState(outfit.selected);
  return (
    <TouchableOpacity
      onPress={() => {
        outfit.selected = !outfit.selected;
        setSelected(prev => !prev);
      }}>
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        style={{
          backgroundColor: outfit.color,
          height: outfit.aspectRatio * width,
          width,
        }}>
        {selected && (
          <RoundedIcon
            name="check"
            color="background"
            backgroundColor="primary"
            size={24}
          />
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default Outfit;
