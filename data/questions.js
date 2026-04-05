/**
 * Quiz questions categorized by subject: History, Technology, and Business.
 * Each question has: id, question text, 4 options, and the correct answer index (0-based)
 */

const historyQuestions = [
  {
    id: 1,
    question: 'What is the capital city of Ethiopia?',
    options: ['Nairobi', 'Addis Ababa', 'Cairo', 'Khartoum'],
    correctIndex: 1,
  },
  {
    id: 2,
    question: 'In which year did Ethiopia become a federal democratic republic?',
    options: ['1974', '1987', '1991', '1995'],
    correctIndex: 3,
  },
  {
    id: 3,
    question: 'During which period did the Ethiopian Empire reach its greatest territorial extent?',
    options: ['15th Century', '19th Century', '17th Century', '14th Century'],
    correctIndex: 1,
  },
  {
    id: 4,
    question: 'Which of the following rulers is credited with expanding the Ethiopian Empire during the late 19th century?',
    options: ['Menelik II', 'Haile Selassie', 'Tewodros II', 'Menkere'],
    correctIndex: 0,
  },
  {
    id: 5,
    question: 'What is the name of the ancient kingdom that preceded the Ethiopian Empire?',
    options: ['Nubia', 'Axum', 'Meroe', 'Kush'],
    correctIndex: 1,
  },
  {
    id: 6,
    question: 'Which battle in 1896 resulted in Ethiopia defeating an Italian colonial army?',
    options: ['Battle of Dogali', 'Battle of Adwa', 'Battle of Gundet', 'Battle of Gura'],
    correctIndex: 1,
  },
  {
    id: 7,
    question: 'What is the official language of Ethiopia?',
    options: ['Somali', 'Oromo', 'Amharic', 'Tigrinya'],
    correctIndex: 2,
  },
  {
    id: 8,
    question: "Which Ethiopian city is home to Africa's highest peak, Ras Dashen?",
    options: ['Gondar', 'Lalibela', 'Bahir Dar', 'Debark'],
    correctIndex: 3,
  },
  {
    id: 9,
    question: 'What is the name of the rock-hewn churches UNESCO World Heritage Site in Ethiopia?',
    options: ['Axum Obelisks', 'Lalibela', 'Harar Jugol', 'Simien Mountains'],
    correctIndex: 1,
  },
  {
    id: 10,
    question: 'Which river forms a major natural boundary between Ethiopia and Sudan?',
    options: ['Nile', 'Awash', 'Blue Nile', 'Omo'],
    correctIndex: 2,
  },
];

const techQuestions = [
  {
    id: 11,
    question: 'What does CPU stand for?',
    options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unit', 'Central Power Unit'],
    correctIndex: 0,
  },
  {
    id: 12,
    question: 'Who is known as the father of computer science?',
    options: ['Charles Babbage', 'Alan Turing', 'John von Neumann', 'Tim Berners-Lee'],
    correctIndex: 1,
  },
  {
    id: 13,
    question: 'What year was the first iPhone released?',
    options: ['2005', '2007', '2009', '2010'],
    correctIndex: 1,
  },
  {
    id: 14,
    question: 'Which programming language is predominantly used for Android development?',
    options: ['Swift', 'Kotlin', 'Objective-C', 'Ruby'],
    correctIndex: 1,
  },
  {
    id: 15,
    question: 'What does HTML stand for?',
    options: ['HyperText Markup Language', 'HyperText Machine Language', 'HyperTech Markup Language', 'HyperText Marking Language'],
    correctIndex: 0,
  },
  {
    id: 16,
    question: 'Who founded Microsoft?',
    options: ['Steve Jobs and Steve Wozniak', 'Bill Gates and Paul Allen', 'Larry Page and Sergey Brin', 'Mark Zuckerberg'],
    correctIndex: 1,
  },
  {
    id: 17,
    question: 'What is the main component used in first generation computers?',
    options: ['Transistors', 'Integrated Circuits', 'Vacuum Tubes', 'Microprocessors'],
    correctIndex: 2,
  },
  {
    id: 18,
    question: 'What does RAM stand for?',
    options: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Memory', 'Run Access Memory'],
    correctIndex: 1,
  },
  {
    id: 19,
    question: 'Which company acquired GitHub in 2018?',
    options: ['Google', 'Amazon', 'Facebook', 'Microsoft'],
    correctIndex: 3,
  },
  {
    id: 20,
    question: 'What is the most widely used operating system for desktop computers?',
    options: ['macOS', 'Linux', 'Windows', 'ChromeOS'],
    correctIndex: 2,
  },
];

const businessQuestions = [
  {
    id: 21,
    question: 'What does ROI stand for in business?',
    options: ['Rate of Investment', 'Return on Investment', 'Risk of Investment', 'Return on Inventory'],
    correctIndex: 1,
  },
  {
    id: 22,
    question: 'Who is the CEO of Tesla as of 2023?',
    options: ['Jeff Bezos', 'Bill Gates', 'Elon Musk', 'Tim Cook'],
    correctIndex: 2,
  },
  {
    id: 23,
    question: 'What is a "Bull Market"?',
    options: ['A market where prices are falling', 'A market where prices are stable', 'A market with high volatility', 'A market where prices are rising'],
    correctIndex: 3,
  },
  {
    id: 24,
    question: 'Which company is the largest e-commerce retailer in the world?',
    options: ['Alibaba', 'Amazon', 'eBay', 'Walmart'],
    correctIndex: 1,
  },
  {
    id: 25,
    question: 'What does B2B stand for?',
    options: ['Business to Business', 'Buyer to Buyer', 'Business to Buyer', 'Buyer to Business'],
    correctIndex: 0,
  },
  {
    id: 26,
    question: 'What is the term for a company\'s first sale of stock to the public?',
    options: ['IPO', 'SEO', 'ROI', 'CPA'],
    correctIndex: 0,
  },
  {
    id: 27,
    question: 'Which financial statement shows a company\'s profitability over a period?',
    options: ['Balance Sheet', 'Cash Flow Statement', 'Income Statement', 'Statement of Retained Earnings'],
    correctIndex: 2,
  },
  {
    id: 28,
    question: 'What term describes the joining of two independent companies to form a new entity?',
    options: ['Acquisition', 'Merger', 'Takeover', 'Venture'],
    correctIndex: 1,
  },
  {
    id: 29,
    question: 'What is "inflation"?',
    options: ['Increase in purchasing power', 'Decrease in general price levels', 'General increase in prices and fall in purchasing power', 'Stabilization of currency value'],
    correctIndex: 2,
  },
  {
    id: 30,
    question: 'Which of these is considered an intangible asset?',
    options: ['Real Estate', 'Machinery', 'Patents', 'Inventory'],
    correctIndex: 2,
  },
];

const questionsData = {
  History: historyQuestions,
  Technology: techQuestions,
  Business: businessQuestions,
};

export default questionsData;
