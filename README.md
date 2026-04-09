Name: Dagmawi Antehun
ID: UGR/0116/16
Section: 2

# Quiz App

A simple and interactive mobile quiz application built with React Native and Expo.

## Features

- **Multiple Categories**: Select from different topics to test your knowledge.
- **Real-time Timer**: Each question features a visual countdown timer using a circular progress indicator.
- **Interactive Gameplay**: Tap to select answers with immediate visual feedback for correct or incorrect choices.
- **Score Tracking**: Keeps track of your score throughout the quiz session.
- **Final Results**: A dedicated screen to view your final score and restart the quiz to try again.
- **Custom UI Components**: Built with customizable and reusable components like progress bars, option buttons, and animated SVG circular timers.

## Project Structure

- **`App.js`**: The main entry point of the app, handling the top-level state and simple screen navigation.
- **`screens/`**: Contains the main views of the application.
  - `HomeScreen.js`: The initial landing screen where users can choose a category and begin the quiz.
  - `QuizScreen.js`: The core quiz interface featuring the questions, options, and timer.
  - `ResultScreen.js`: The summary screen displayed at the end of the quiz showing the total score.
- **`components/`**: Reusable UI components used across the screens.
  - `CircularProgress.js`: An SVG-based circular progress bar to visually represent the timer.
  - `Timer.js`: Handles the countdown timer logic.
  - `OptionButton.js`: Custom styled buttons for the multiple-choice answers, featuring selection states.
  - `ProgressBar.js`: A horizontal bar to show the user's progress through the quiz questions.
  - `QuestionCard.js`: The component responsible for displaying the current question text.
- **`data/`**: Local data storage.
  - `questions.js`: Contains the array of question objects, their options, and the correct answers.

## Prerequisites

- [Node.js](https://nodejs.org/) installed along with `npm` (or `yarn`).
- [Expo CLI](https://docs.expo.dev/get-started/installation/) either installed globally or simply run via `npx expo`.

## Getting Started

1. **Clone the repository** (if applicable) or navigate to the project directory:

   ```bash
   cd Dagmawi_Antehun_0116
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the Expo server**:

   ```bash
   npm start
   ```

   Or use:

   ```bash
   npx expo start
   ```

4. **Run the App**:
   - Open the Expo Go app on your physical device and scan the QR code generated in your terminal or browser.
   - Or, run on an iOS Simulator or Android Emulator directly from the Expo CLI options.

## Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)
