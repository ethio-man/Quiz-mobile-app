/**
 * QuestionCard Component
 * Displays the question text and subtitle instruction inside a dark rounded card.
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionCard = ({ question }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
      <Text style={styles.subtitle}>Select the correct option below.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#16162a',
    borderRadius: 18,
    padding: 22,
    marginBottom: 24,
  },
  questionText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    marginBottom: 10,
  },
  subtitle: {
    color: '#888899',
    fontSize: 13,
    fontWeight: '400',
  },
});

export default QuestionCard;
