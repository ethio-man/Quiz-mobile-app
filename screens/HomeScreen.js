import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView
} from 'react-native';

export default function HomeScreen({ onStart }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}
        imageStyle={{ opacity: 0.6 }}
      >
        <SafeAreaView style={styles.content}>
          <View style={styles.spacer} />

          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={onStart}
          >
            <Text style={styles.buttonTextPrimary}>Start Quiz ጀ?</Text>
            <Text style={styles.buttonTextSecondary}>A 10-Question Challenge</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E120D', // Dark brown/black fallback background
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', // Aligns children to bottom
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 60, // Padding from the bottom of the screen
  },
  spacer: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#6A191B', // Dark red background of the button
    borderWidth: 2,
    borderColor: '#D4AF37', // Gold/yellow border
    borderRadius: 35, // large border radius for pill shape
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8, // for Android shadow
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonTextSecondary: {
    color: '#FDF0D5',
    fontSize: 14,
    fontWeight: '500',
  },
});
