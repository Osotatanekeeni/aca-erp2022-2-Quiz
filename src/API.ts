import { shuffleArray } from "./utils";

import { QUESTIONS } from "./QUESTIONS";

export type Question = {
    // category: string;
    correct_answer: string;
    // difficulty: string;
    incorrect_answers: string[];
    question: string;
    summary: string;
    // type: string;

}

export type QuestionState = Question & { answers: string[] };


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

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