import styled from 'styled-components';

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

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 1rem;
  font-weight: 500;
  color: #000;
  &.highlight {
    font-weight: bold;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Icon = styled.img`
  width: auto;
  height: 25px;
`;
