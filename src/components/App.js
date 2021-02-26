import React from 'react';

function App() {
  const questions = [
    {
      questionText: 'If you owed someone $500 plus interest, which would be higher to pay back?',
      answerOptions: [
				{ answerText: '$510', isCorrect: false },
				{ answerText: '$500 + $5', isCorrect: false },
			],
    },
    {
      questionText: 'If both your income and the prices of groceries, gas, and other products you buy were to double over the next 20 years, how much will you be able to purchase?',
      answerOptions: [
				{ answerText: 'More than you can buy now', isCorrect: false },
				{ answerText: 'Less than you can buy now', isCorrect: false },
        { answerText: 'The same as you can buy now', isCorrect: false },
			],
    },
    {
      questionText: 'You have $1,000 in a savings account earning 1% annually. What would your balance be after 10 years if you never withdrew any money from your account?',
      answerOptions: [
				{ answerText: 'More than $1,100', isCorrect: false },
				{ answerText: 'Exactly $1,100', isCorrect: false },
        { answerText: 'Less than $1,100', isCorrect: false },
			],
    },
    {
      questionText: 'Suppose you lose 50% of a $10,000 investment. How much return would you need to get back to $10,000?',
      answerOptions: [
				{ answerText: 'A gain of 50%', isCorrect: false },
				{ answerText: 'A gain of 75%', isCorrect: false },
        { answerText: 'A gain of 100%', isCorrect: false },
			],
    },
    {
      questionText: 'Generally speaking, is it more secure to put your money into:',
      answerOptions: [
				{ answerText: 'One place', isCorrect: false },
        { answerText: 'More than one place', isCorrect: false },
			],
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
