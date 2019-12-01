import React, { useState } from "react";
import styled from "styled-components";

import QuestionSet, { QuestionItem } from "./QuestionSet";

// accepted props of a FAQ column (2 on desktop, 1 on mobile + tablet)
interface ColumnProps {
  questions: QuestionItem[];
  openAll: boolean;
}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  ${props => props.theme.mediaQueries.tablet`
    width: 100%;
  `}
`;

const Column: React.FC<ColumnProps> = ({ questions, openAll }) => {
  const [openedIndex, setOpened] = useState(0);

  const onQuestionClicked = (index: number) => {
    setOpened(openedIndex === index ? -1 : index);
  };

  return (
    <ColumnContainer>
      {questions.map(({ question, answer }, i) => (
        <QuestionSet
          key={question}
          question={question}
          answer={answer}
          shouldOpen={openedIndex === i || openAll}
          onClick={() => onQuestionClicked(i)}
        />
      ))}
    </ColumnContainer>
  );
};

export default Column;
