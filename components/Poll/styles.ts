import styled from 'styled-components';

export const PollWrapper = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const TitleQuestion = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
`;

export const AnswerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
`;

export const AnswersItem = styled.li`
  display: flex;
  list-style: none;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  position: relative;
`;

export const Votes = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
  color: #888;
`;
