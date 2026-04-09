import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const ProgressBar = ({ current, total }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: (current / total) * 100,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [current, total]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fill, { width: widthInterpolated }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    backgroundColor: '#2a2a3e',
    borderRadius: 2,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: '#7c5cfc',
    borderRadius: 2,
  },
});

export default ProgressBar;
