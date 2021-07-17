import React, {useRef, useState} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {interpolateColor, multiply} from 'react-native-reanimated';
import {makeStyle, Theme} from '@config/theme';
import {AuthRoutes, StackNavigationProps} from '@core/types';
import Slide, {SLIDE_HEIGHT} from './components/Slide';
import Subslide from './components/Subslide';
import Dot from './components/Dot';

const {width} = Dimensions.get('screen');
const SLIDES = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find your outfit',
    description:
      "Confused about your outfit ? Don't worry! find the best outfit here",
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear is first, wear is first',
    description:
      'Hating you clothes in your wardrobe ?, explore hundreds of outfit ideas',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your style, your way',
    description:
      'Create your individual and unique style and look amazing everyday',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look good, feel good',
    description:
      'Discover the latest trends in fashion and explore your personality',
  },
];

const OnboardingScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Onboarding'>) => {
  const [scrollX, setScrollX] = useState(0);
  const styles = useStyles();

  const bgColor = interpolateColor(
    scrollX,
    SLIDES.map((_, i) => i * width),
    SLIDES.map(slide => slide.color),
    'RGB',
  );

  const scroll = useRef<Animated.ScrollView>(null);

  return (
    <View style={styles.container}>
      <View style={[styles.slider, {backgroundColor: bgColor as string}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          onScroll={event => {
            const scrolling = event.nativeEvent.contentOffset.x;
            setScrollX(scrolling);
          }}>
          {SLIDES.map(({title}, index) => (
            <Slide
              title={title}
              key={title.toLowerCase()}
              right={!!(index % 2)}
            />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <Animated.View
          style={[styles.corners, {backgroundColor: bgColor as string}]}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {SLIDES.map(({title}, index) => (
              <Dot
                key={`dot__${title.toLowerCase()}`}
                {...{index, currentIndex: scrollX / width}}
              />
            ))}
          </View>
          <Animated.View
            style={[
              styles.footerSlide,
              {
                width: width * SLIDES.length,
                transform: [
                  {
                    translateX: multiply(scrollX, -1),
                  },
                ],
              },
            ]}>
            {SLIDES.map(({title, subtitle, description}, index) => {
              const last: boolean = index === SLIDES.length - 1;
              return (
                <Subslide
                  {...{subtitle, description, last}}
                  key={`content__${title.toLowerCase()}`}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({x: width * (index + 1), animated: true});
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyle((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    backgroundColor: 'cyan',
    borderBottomRightRadius: theme.borderRadii?.xl,
    height: SLIDE_HEIGHT,
  },
  footer: {
    flex: 1,
  },
  corners: {
    ...(StyleSheet.absoluteFill as object),
    backgroundColor: 'cyan',
  },
  footerContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii?.xl,
    flex: 1,
    flexDirection: 'row',
  },
  footerSlide: {
    flexDirection: 'row',
  },
  pagination: {
    alignItems: 'center',
    ...(StyleSheet.absoluteFill as object),
    height: theme.borderRadii?.xl,
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export default OnboardingScreen;
