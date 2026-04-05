/**
 * ResultScreen
 * Displayed after all questions are completed.
 * Shows:
 * - Animated circular progress ring with score and percentage
 * - Performance feedback badge (Excellent / Strong Grasp / Almost There / Try Again)
 * - "Your Next Step" card with suggested improvement action
 * - Restart Quiz button
 */
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';

import CircularProgress from '../components/CircularProgress';

const TOTAL = 10; // match questions.js length

/**
 * Returns feedback label + color based on percentage.
 */
const getFeedback = (percentage) => {
  if (percentage >= 90) return { label: 'EXCELLENT!', color: '#5dca8a' };
  if (percentage >= 70) return { label: 'STRONG GRASP', color: '#7c5cfc' };
  if (percentage >= 50) return { label: 'ALMOST THERE', color: '#f5a623' };
  return { label: 'TRY AGAIN', color: '#e57373' };
};

const ResultScreen = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  const feedback = getFeedback(percentage);

  // Slide-up entrance animation
  const slideAnim = useRef(new Animated.Value(60)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1E120D" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View
          style={[
            styles.container,
            { transform: [{ translateY: slideAnim }], opacity: opacityAnim },
          ]}
        >
          {/* ── Back Arrow ── */}
          <TouchableOpacity style={styles.backButton} onPress={onRestart}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>

          {/* ── Circular progress ring ── */}
          <CircularProgress score={score} total={total} />

          {/* ── Feedback badge ── */}
          <View style={[styles.feedbackBadge, { borderColor: feedback.color }]}>
            <Text style={[styles.feedbackText, { color: feedback.color }]}>{feedback.label}</Text>
          </View>

          {/* ── "Your Next Step" Card ── */}
          <View style={styles.nextStepCard}>
            <View style={styles.nextStepHeader}>
              <Text style={styles.nextStepTag}>YOUR NEXT STEP</Text>
            </View>
            <View style={styles.nextStepBody}>
              {/* Icon + title */}
              <View style={styles.nextStepTitleRow}>
                <View style={styles.nextStepIcon}>
                  <Text style={styles.nextStepIconText}>⊙</Text>
                </View>
                <Text style={styles.nextStepTitle}>Practice More Questions</Text>
              </View>

              {/* Chips */}
              <View style={styles.chipsRow}>
                <View style={styles.chip}>
                  <Text style={styles.chipText}>5 min</Text>
                </View>
                <View style={styles.chip}>
                  <Text style={styles.chipText}>{total} questions</Text>
                </View>
                <View style={styles.chip}>
                  <Text style={styles.chipText}>Medium</Text>
                </View>
              </View>

              {/* Why this helps */}
              <View style={styles.whyBox}>
                <Text style={styles.whyTitle}>⚡ Why this helps</Text>
                <Text style={styles.whyText}>
                  A quick retry is the fastest way to turn this result into progress.
                </Text>
              </View>

              {/* Restart button inside card */}
              <TouchableOpacity style={styles.restartButton} onPress={onRestart} activeOpacity={0.85}>
                <Text style={styles.restartButtonText}>Start improvement quiz</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ── Back to quizzes text link ── */}
          <TouchableOpacity style={styles.backLink} onPress={onRestart}>
            <Text style={styles.backLinkText}>← Back to My Quizzes</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1E120D',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 6,
    marginTop: 10,
    marginBottom: 0,
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '300',
  },

  // Feedback badge
  feedbackBadge: {
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginBottom: 28,
  },
  feedbackText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },

  // Next step card
  nextStepCard: {
    width: '100%',
    backgroundColor: '#13132a',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 24,
  },
  nextStepHeader: {
    backgroundColor: '#1e1e3a',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nextStepTag: {
    color: '#7c5cfc',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  nextStepBody: {
    padding: 18,
  },
  nextStepTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  nextStepIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1a1a40',
    borderWidth: 1,
    borderColor: '#7c5cfc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  nextStepIconText: {
    color: '#7c5cfc',
    fontSize: 16,
  },
  nextStepTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
    flex: 1,
  },

  // Chips
  chipsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    backgroundColor: '#24244a',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  chipText: {
    color: '#aaaacc',
    fontSize: 12,
    fontWeight: '600',
  },

  // Why this helps
  whyBox: {
    backgroundColor: '#1a1a3a',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  whyTitle: {
    color: '#7c5cfc',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
  },
  whyText: {
    color: '#aaaacc',
    fontSize: 13,
    lineHeight: 18,
  },

  // Restart button
  restartButton: {
    backgroundColor: '#7c5cfc',
    borderRadius: 50,
    paddingVertical: 16,
    alignItems: 'center',
  },
  restartButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },

  // Back link
  backLink: {
    marginTop: 8,
  },
  backLinkText: {
    color: '#aaaacc',
    fontSize: 14,
  },
});

export default ResultScreen;
