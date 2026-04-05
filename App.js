/**
 * App.js - Entry Point
 *
 * Handles top-level screen navigation between:
 * - QuizScreen (the main quiz)
 * - ResultScreen (score summary)
 *
 * Uses simple state-based routing (no external navigation library needed).
 */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import questions from './data/questions';

const SCREENS = {
  HOME: 'home',
  QUIZ: 'quiz',
  RESULT: 'result',
};

export default function App() {
  // Which screen is active
  const [screen, setScreen] = useState(SCREENS.HOME);
  // Final score passed from QuizScreen → ResultScreen
  const [finalScore, setFinalScore] = useState(0);

  /**
   * Called by HomeScreen's Start Quiz button.
   */
  const handleStart = () => {
    setScreen(SCREENS.QUIZ);
  };

  /**
   * Called by QuizScreen when all questions are answered.
   * Transitions to the ResultScreen with the achieved score.
   */
  const handleFinish = (score) => {
    setFinalScore(score);
    setScreen(SCREENS.RESULT);
  };

  /**
   * Called by ResultScreen to restart the quiz from question 1.
   */
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
        <QuizScreen onFinish={handleFinish} />
      )}

      {screen === SCREENS.RESULT && (
        <ResultScreen
          score={finalScore}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0d0d1a',
  },
});
