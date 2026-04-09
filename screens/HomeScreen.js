import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView
} from 'react-native';

export default function HomeScreen({ onStart }) {
  const [selectedCategory, setSelectedCategory] = useState('History');
  const categories = ['History', 'Technology', 'Business'];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}
        imageStyle={{ opacity: 0.6 }}
      >
        <SafeAreaView style={styles.content}>
          <View style={styles.spacer} />

          <View style={styles.categoryContainer}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryButton,
                  selectedCategory === cat && styles.categoryButtonSelected
                ]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextSelected
                ]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={() => onStart(selectedCategory)}
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
    backgroundColor: '#1E120D',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 60,
  },
  spacer: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 20,
  },
  categoryButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D4AF37',
  },
  categoryButtonSelected: {
    backgroundColor: '#D4AF37',
  },
  categoryText: {
    color: '#FDF0D5',
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: '#1E120D',
  },
  buttonContainer: {
    backgroundColor: '#6A191B',
    borderWidth: 2,
    borderColor: '#D4AF37',
    borderRadius: 35,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
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
