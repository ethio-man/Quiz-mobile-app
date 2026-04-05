/**
 * QuizScreen
 * Main quiz screen handling:
 * - Displaying one question at a time
 * - Answer selection with immediate feedback
 * - Score tracking
 * - Per-question timer
 * - Progress bar and navigation header
 * - Fade-in animations on question transitions
 */
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Platform,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import OptionButton from '../components/OptionButton';
import Timer from '../components/Timer';
import questionsData from '../data/questions';

const QuizScreen = ({ category, onFinish, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null); // which option user tapped
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  // Fade animation for smooth question transitions
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const currentCategoryQuestions = questionsData[category] || questionsData['History'];
  const currentQuestion = currentCategoryQuestions[currentIndex];
  const total = currentCategoryQuestions.length;

  // Fade in when question changes
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  /**
   * Handle option selection:
   * - Lock all options
   * - Show correct / incorrect highlighting
   * - Update score
   */
  const handleSelect = (index) => {
    if (answered) return;
    setSelectedIndex(index);
    setAnswered(true);
    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  /**
   * Called when timer runs out before user selects an answer.
   * Marks question as answered (no selection) so correct answer is revealed.
   */
  const handleTimeUp = () => {
    if (!answered) {
      setAnswered(true);
      // No score increment – time ran out
    }
  };

  /**
   * Navigate to next question with fade out/in transition.
   * On last question, call onFinish to go to ResultScreen.
   */
  const handleNext = () => {
    if (currentIndex + 1 >= total) {
      // Pass final score to parent
      onFinish(score);
      return;
    }

    // Fade out → reset → fade in next question
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
      setAnswered(false);
    });
  };

  return (
    <ImageBackground 
      source={require('../assets/QuizBackeground.png')} 
      style={styles.backgroundStyle}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      {/* ── Header: back arrow + question counter ── */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={28} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.counterText}>
          {currentIndex + 1} / {total}
        </Text>
        {/* Timer on right side */}
        <Timer
          questionIndex={currentIndex}
          onTimeUp={handleTimeUp}
          answered={answered}
        />
      </View>

      {/* ── Purple progress bar ── */}
      <ProgressBar current={currentIndex + 1} total={total} />

      {/* ── Animated question + options ── */}
      <Animated.ScrollView
        style={[styles.scroll, { opacity: fadeAnim }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Question card */}
        <QuestionCard question={currentQuestion.question} />

        {/* Answer options */}
        {currentQuestion.options.map((option, idx) => (
          <OptionButton
            key={idx}
            option={option}
            index={idx}
            onPress={handleSelect}
            selectedIndex={selectedIndex}
            correctIndex={currentQuestion.correctIndex}
            answered={answered}
          />
        ))}
      </Animated.ScrollView>

      {/* ── Next Question button (shown only after answering) ── */}
      {answered && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext} activeOpacity={0.85}>
            <Text style={styles.nextButtonText}>
              {currentIndex + 1 === total ? 'See Results' : 'Next Question'}
            </Text>
          </TouchableOpacity>
        </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    padding: 6,
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '300',
  },
  counterText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // Centers content vertically in the parchment
    paddingHorizontal: 35,    // Extra padding to fit within the parchment edges
    paddingVertical: 10,
  },
  footer: {
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
  },
  nextButton: {
    backgroundColor: '#7c5cfc',
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default QuizScreen;
