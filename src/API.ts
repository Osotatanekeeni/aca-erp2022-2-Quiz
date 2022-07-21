import { shuffleArray } from "./utils";

import { QUESTIONS } from "./QUESTIONS";

export type Question = {
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    summary: string;
}

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = () => {

    const data = QUESTIONS;

    return data.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers, 
                question.correct_answer
            ]),
        }
    ))
}