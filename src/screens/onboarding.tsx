import React, {useRef, useState} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {interpolateColor, multiply} from 'react-native-reanimated';
import Slide, {SLIDE_HEIGHT} from './components/Slide';
import Subslide from './components/Subslide';

const {width} = Dimensions.get('screen');
const BORDER_RADIUS = 75;
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

const OnboardingScreen: React.FC<{}> = () => {
  const [scrollX, setScrollX] = useState(0);

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
            <Slide title={title} key={index} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={[styles.corners, {backgroundColor: bgColor as string}]} />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * SLIDES.length,
              transform: [
                {
                  translateX: multiply(scrollX, -1),
                },
              ],
            },
          ]}>
          {SLIDES.map(({subtitle, description}, index) => (
            <Subslide
              {...{subtitle, description}}
              key={index}
              last={index === SLIDES.length - 1}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({x: width * (index + 1), animated: true});
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    backgroundColor: 'cyan',
    borderBottomRightRadius: BORDER_RADIUS,
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
    borderTopLeftRadius: BORDER_RADIUS,
    flex: 1,
    flexDirection: 'row',
  },
});

export default OnboardingScreen;
