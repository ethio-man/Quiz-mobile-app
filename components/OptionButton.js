/**
 * OptionButton Component
 * Renders a single answer option with correct/incorrect visual states.
 * - Default: dark pill with radio circle
 * - Correct: green background with checkmark
 * - Incorrect: red background with X mark
 */
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const OptionButton = ({ option, index, onPress, selectedIndex, correctIndex, answered }) => {
  const isSelected = selectedIndex === index;
  const isCorrect = correctIndex === index;

  // Determine button style based on answer state
  const getButtonStyle = () => {
    if (!answered) return styles.button; // unanswered state
    if (isCorrect) return [styles.button, styles.correctButton]; // always show correct
    if (isSelected && !isCorrect) return [styles.button, styles.incorrectButton]; // wrong selection
    return styles.button;
  };

  const getLabelStyle = () => {
    if (!answered) return styles.label;
    if (isCorrect) return [styles.label, styles.correctLabel];
    if (isSelected && !isCorrect) return [styles.label, styles.incorrectLabel];
    return styles.label;
  };

  const getRadioStyle = () => {
    if (!answered) return styles.radio;
    if (isCorrect) return [styles.radio, styles.correctRadio];
    if (isSelected && !isCorrect) return [styles.radio, styles.incorrectRadio];
    return styles.radio;
  };

  // Icon shown inside radio circle after answering
  const renderRadioIcon = () => {
    if (!answered) return null;
    if (isCorrect) {
      return <Text style={styles.radioIcon}>✓</Text>;
    }
    if (isSelected && !isCorrect) {
      return <Text style={styles.radioIconX}>✕</Text>;
    }
    return null;
  };

  // Right-side icon badge
  const renderBadge = () => {
    if (!answered) return null;
    if (isCorrect) {
      return (
        <View style={styles.badgeCorrect}>
          <Text style={styles.badgeText}>✓</Text>
        </View>
      );
    }
    if (isSelected && !isCorrect) {
      return (
        <View style={styles.badgeIncorrect}>
          <Text style={styles.badgeText}>✕</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={() => !answered && onPress(index)}
      activeOpacity={answered ? 1 : 0.7}
      disabled={answered}
    >
      {/* Radio circle on the left */}
      <View style={getRadioStyle()}>{renderRadioIcon()}</View>

      {/* Option text */}
      <Text style={getLabelStyle()}>{option}</Text>

      {/* Badge on right */}
      {renderBadge()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(139, 90, 43, 0.1)', // sheer brownish tint
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#8b5a2b',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  correctButton: {
    backgroundColor: 'rgba(46, 125, 50, 0.15)',
    borderColor: '#2e7d52',
  },
  incorrectButton: {
    backgroundColor: 'rgba(192, 57, 43, 0.15)',
    borderColor: '#c0392b',
  },

  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#8b5a2b',
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctRadio: {
    backgroundColor: '#2e7d52',
    borderColor: '#2e7d52',
  },
  incorrectRadio: {
    backgroundColor: '#c0392b',
    borderColor: '#c0392b',
  },
  radioIcon: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  radioIconX: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },

  label: {
    flex: 1,
    color: '#3A2415',
    fontSize: 15,
    fontWeight: '600',
  },
  correctLabel: {
    color: '#2e7d52',
    fontWeight: '700',
  },
  incorrectLabel: {
    color: '#c0392b',
    fontWeight: '700',
  },

  badgeCorrect: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#2e7d52',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeIncorrect: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#c0392b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default OptionButton;
