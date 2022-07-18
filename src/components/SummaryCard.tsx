import React from "react";
import { Wrapper } from "./SummaryCard.styles";
import { QUESTIONS } from "../QUESTIONS";


var summaries: any[] = [];
var questionNumber = 1;
for (let q of QUESTIONS) {
    summaries.push(questionNumber + ". " + q.summary);
    questionNumber++;
}
const SummaryCard: React.FC = () => (

    <Wrapper>
        <h2>Summary of all questions</h2>
        <h3 className="number">
            {summaries}
        </h3>
    </Wrapper>
)

export default SummaryCard;