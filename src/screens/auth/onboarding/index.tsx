import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {interpolateColor, multiply} from 'react-native-reanimated';

import {makeStyle, Theme} from '@config/theme';
import {AuthRoutes, StackNavigationProps} from '@core/types';
import {slides} from '@core/content';

import Slide, {SLIDE_HEIGHT} from './components/Slide';
import Subslide from './components/Subslide';
import Dot from './components/Dot';

const {width} = Dimensions.get('screen');

const OnboardingScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Onboarding'>) => {
  const [scrollX, setScrollX] = useState(0);
  const styles = useStyles();

  const bgColor = interpolateColor(
    scrollX,
    slides.map((_, i) => i * width),
    slides.map(slide => slide.color),
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
          {slides.map(({title}, index) => (
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
            {slides.map(({title}, index) => (
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
                width: width * slides.length,
                transform: [
                  {
                    translateX: multiply(scrollX, -1),
                  },
                ],
              },
            ]}>
            {slides.map(({title, subtitle, description}, index) => {
              const last: boolean = index === slides.length - 1;
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
