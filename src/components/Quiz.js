import React, { useState } from 'react';


function Quiz() {

  const questions = [
    {
      title: 'Percentages',
      questionText: 'If you owed someone $500 plus interest, which would be higher to pay back?',
      answerOptions: [
				{ answerText: '$510', isCorrect: false },
				{ answerText: '$500 + $5', isCorrect: true },
			],
    },
    {
      title: 'Inflation',
      questionText: 'If both your income and the prices of groceries, gas, and other products you buy were to double over the next 20 years, how much will you be able to purchase?',
      answerOptions: [
				{ answerText: 'More than you can buy now', isCorrect: false },
				{ answerText: 'Less than you can buy now', isCorrect: false },
        { answerText: 'The same as you can buy now', isCorrect: true },
			],
    },
    {
      title: 'Compound Interest',
      questionText: 'You have $1,000 in a savings account earning 1% annually. What would your balance be after 10 years if you never withdrew any money from your account?',
      answerOptions: [
				{ answerText: 'More than $1,100', isCorrect: true },
				{ answerText: 'Exactly $1,100', isCorrect: false },
        { answerText: 'Less than $1,100', isCorrect: false },
			],
    },
    {
      title: 'Impact Of Losses',
      questionText: 'Suppose you lose 50% of a $10,000 investment. How much return would you need to get back to $10,000?',
      answerOptions: [
				{ answerText: 'A gain of 50%', isCorrect: false },
				{ answerText: 'A gain of 75%', isCorrect: false },
        { answerText: 'A gain of 100%', isCorrect: true },
			],
    },
    {
      title: 'Risk Diversification',
      questionText: 'Generally speaking, is it more secure to put your money into:',
      answerOptions: [
				{ answerText: 'One place', isCorrect: false },
        { answerText: 'More than one place', isCorrect: true },
			],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  return (
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You got {score} correct out of {questions.length}.
				</div>) : (
				<React.Fragment>
						<span>Question {currentQuestion + 1}</span>/{questions.length}
            <div className='question-title'>{questions[currentQuestion].title}</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
				</React.Fragment>
			)}
		</div>
	);
}

export default Quiz;
