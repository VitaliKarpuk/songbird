import React from "react";
import BlockOptions from "./BlockOptions/BlockOptions";
import BlockDescriptions from "./BlockDescription/BlockDescriptions";
import { Item } from "../../reducers/reducers";
import "./style.scss";

type Props = {
  listOptions: Array<Item>;
  handelOption: (id: number) => void;
  numberOption: number;
  question: any;
  handleNextQuestion: () => void;
  numberQuestion: number;
  activeBtn: boolean;
  activeNextBtn: () => void;
  handleCorrectAnswer: () => void;
  showScore: (number: number) => void;
  
};
const BlockAnswerOptions: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    listOptions,
    handelOption,
    numberOption,
    question,
    handleNextQuestion,
    numberQuestion,
    activeBtn,
    activeNextBtn,
    handleCorrectAnswer,
    showScore
  } = props;
  
  return (
    <div className="wrapper__option-description">
      {question && (
        <BlockOptions
          question={question}
          listOptions={listOptions}
          handelOption={handelOption}
          activeNextBtn={activeNextBtn}
          activeBtn={activeBtn}
          handleCorrectAnswer={handleCorrectAnswer}
          showScore={showScore}
        />
      )}
      <BlockDescriptions
        numberOption={numberOption}
        listOptions={listOptions}
        numberQuestion={numberQuestion}
      />
      {!activeBtn ? (
        <button className="next-question">Next</button>
      ) : (
        <button
          className="next-question next-question_active"
          onClick={handleNextQuestion}
        >
          Next Level
        </button>
      )}
    </div>
  );
};

export default BlockAnswerOptions;
