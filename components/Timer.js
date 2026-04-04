/**
 * Timer Component
 * Countdown timer displayed per question.
 * When time runs out, automatically marks the question as answered with no selection.
 */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TIMER_SECONDS = 20; // seconds per question

const Timer = ({ questionIndex, onTimeUp, answered }) => {
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const intervalRef = useRef(null);

  // Handle timer logic
  useEffect(() => {
    setTimeLeft(TIMER_SECONDS);
    clearInterval(intervalRef.current);

    if (!answered) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [questionIndex, answered]);

  // Trigger onTimeUp when time runs out and hasn't been answered
  useEffect(() => {
    if (timeLeft === 0 && !answered) {
      clearInterval(intervalRef.current);
      onTimeUp();
    }
  }, [timeLeft, answered, onTimeUp]);

  const isUrgent = timeLeft <= 5;

  return (
    <View style={[styles.container, isUrgent && styles.containerUrgent]}>
      <Text style={[styles.text, isUrgent && styles.textUrgent]}>{timeLeft}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e35',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3a3a5e',
  },
  containerUrgent: {
    borderColor: '#e57373',
    backgroundColor: '#3a1010',
  },
  text: {
    color: '#aaaacc',
    fontSize: 14,
    fontWeight: '700',
  },
  textUrgent: {
    color: '#e57373',
  },
});

export default Timer;
