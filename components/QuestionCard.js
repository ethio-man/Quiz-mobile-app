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
    backgroundColor: 'transparent', // removed dark background to let parchment show
    padding: 10,
    marginBottom: 20,
  },
  questionText: {
    color: '#3A2415', // Dark ink color
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#5C3A21',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default QuestionCard;
