import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import questionsData from './data/questions';

const SCREENS = {
  HOME: 'home',
  QUIZ: 'quiz',
  RESULT: 'result',
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.HOME);
  const [finalScore, setFinalScore] = useState(0);
  const [category, setCategory] = useState('History');

  const handleStart = (selectedCategory) => {
    setCategory(selectedCategory);
    setScreen(SCREENS.QUIZ);
  };

  const handleFinish = (score) => {
    setFinalScore(score);
    setScreen(SCREENS.RESULT);
  };

  const handleRestart = () => {
    setFinalScore(0);
    setScreen(SCREENS.QUIZ);
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />

      {screen === SCREENS.HOME && (
        <HomeScreen onStart={handleStart} />
      )}

      {screen === SCREENS.QUIZ && (
        <QuizScreen 
          category={category} 
          onFinish={handleFinish} 
          onBack={() => setScreen(SCREENS.HOME)}
        />
      )}

      {screen === SCREENS.RESULT && (
        <ResultScreen
          score={finalScore}
          total={questionsData[category]?.length || 10}
          onRestart={handleRestart}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1E120D',
  },
});
