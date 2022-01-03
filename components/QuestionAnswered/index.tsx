import { QandA } from '../../types';
import { AnswerContainer, AnswersItem, Icon, Text } from './styles';

type questionProps = {
  question: QandA;
  totalVotes: number;
  highestVoted: number;
  votedIndex: number;
};

const checkImage = require('../../static/check-circle.svg');

export function QuestionAnswered({
  question,
  totalVotes,
  highestVoted,
  votedIndex,
}: questionProps) {
  return (
    <>
      {question.answers.map((answer, i) => {
        const percent = Math.floor((answer.votes * 100) / totalVotes);
        const isHighestVoted = answer.votes === highestVoted;
        const highlight = isHighestVoted ? 'highlight' : '';

        return (
          <AnswersItem key={i}>
            <div
              style={{
                width: `${percent}%`,
                background: isHighestVoted ? '#A2FFF4' : '#E8E8E8',
                height: '100%',
                position: 'absolute',
                left: 0,
                bottom: 0,
              }}
            ></div>
            <AnswerContainer>
              <Text className={highlight}>
                {answer.text}
                {votedIndex === i && <Icon src={checkImage} />}
              </Text>
              <Text className={highlight}>{percent}%</Text>
            </AnswerContainer>
          </AnswersItem>
        );
      })}
    </>
  );
}
