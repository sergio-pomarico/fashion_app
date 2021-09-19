import React, {useState, ReactNode, Children} from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';

import {Box, Text} from '@components';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useEffect} from 'react';
import {makeStyle, Theme} from '@config/theme';

interface Tab {
  title: string;
  id: string;
}

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
}

const {width} = Dimensions.get('screen');

const Tabs = ({tabs, children}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  //const selectedTab = tabs[selectedIndex];

  const dotPosition = useSharedValue(width * 0.25);
  const contentPosition = useSharedValue(0);

  const dotTransition = useDerivedValue(() => {
    return withSpring(dotPosition.value);
  });

  const contentTransition = useDerivedValue(() => {
    return withSpring(contentPosition.value);
  });

  useEffect(() => {
    dotPosition.value = selectedIndex ? width * 0.75 : width * 0.25;
    contentPosition.value = selectedIndex;
  }, [dotPosition, contentPosition, selectedIndex]);

  const dot = useAnimatedStyle(() => {
    return {
      transform: [{translateX: dotTransition.value}],
    };
  });

  const content = useAnimatedStyle(() => ({
    transform: [{translateX: -width * contentTransition.value}],
  }));

  const styles = useStyles();

  return (
    <Box flex={1}>
      <Box flexDirection="row" marginVertical="m" width={'100%'}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => setSelectedIndex(index)}
            key={tab.id}>
            <Box padding="m">
              <Text textAlign="center" variant="h3">
                {tab.title}
              </Text>
            </Box>
          </TouchableOpacity>
        ))}
        <Animated.View style={[styles.dot, dot]} />
      </Box>
      <Animated.View style={[styles.tab, content]}>
        {Children.map(children, (child, i) => (
          <Box flex={1} key={i} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

const useStyles = makeStyle((theme: Theme) => ({
  container: {
    flex: 1,
    width: '50%',
  },
  dot: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    bottom: 0,
    height: 10,
    left: 0,
    position: 'absolute',
    width: 10,
  },
  tab: {
    flexDirection: 'row',
    width: width * 2,
  },
}));

export default Tabs;
