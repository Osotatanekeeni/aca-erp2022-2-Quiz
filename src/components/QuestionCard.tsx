import React from 'react';

// Types
import { AnswerObject } from '../App';

// Styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';
import ProgressBar from "@ramonak/react-progress-bar";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions 
}) => (
    <Wrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <ProgressBar
          margin='0'
          height='5px'
          labelAlignment='right'
          isLabelVisible={false}
          bgColor='green'
          ariaValuemin={0}
          ariaValuemax={100}
          borderRadius='10px'
          completed={Math.round((questionNumber+1)/totalQuestions * 100)}
        />
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <ButtonWrapper 
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard;