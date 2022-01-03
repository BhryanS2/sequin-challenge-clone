import { useState, MouseEvent, useEffect } from 'react';
import { QandA, QandAsDocument } from '../../types';
import { QuestionAnswered } from '../QuestionAnswered';

import {
  AnswerWrapper,
  AnswersItem,
  PollWrapper,
  TitleQuestion,
  Votes,
} from './styles';

type Props = {
  qandas: QandAsDocument;
};

export function Poll({ qandas }: Props) {
  const [isVoted, setIsVoted] = useState(false);
  const [votedIndex, setVotedIndex] = useState(0);
  const [highestVoted, setHighestVoted] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const { questions } = qandas;
  const [question, setQuestion] = useState<QandA>(questions[randomIndex]);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const votes = question.answers.reduce((acc, curr) => acc + curr.votes, 0);
    setTotalVotes(votes);
  }, [question]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * questions.length);
    setRandomIndex(randomNumber);
    setQuestion(questions[randomNumber]);
  }, []);

  function handleClick(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
    const { textContent } = e.currentTarget;
    const answer = question.answers.find(
      (answer) => answer.text === textContent
    );
    if (!answer) return;
    answer.votes += 1;
    const maxValue = Math.max(...question.answers.map(({ votes }) => votes));
    setTotalVotes(totalVotes + 1);
    setIsVoted(true);
    setVotedIndex(question.answers.indexOf(answer));
    setHighestVoted(maxValue);
  }

  return (
    <PollWrapper>
      <TitleQuestion>{question.question.text}</TitleQuestion>
      <AnswerWrapper>
        {isVoted ? (
          <QuestionAnswered
            highestVoted={highestVoted}
            question={question}
            totalVotes={totalVotes}
            votedIndex={votedIndex}
          />
        ) : (
          question.answers.map((answer, i) => (
            <AnswersItem key={i} onClick={(e) => handleClick(e)}>
              {answer.text}
            </AnswersItem>
          ))
        )}
        <Votes>{totalVotes} votes</Votes>
      </AnswerWrapper>
    </PollWrapper>
  );
}
