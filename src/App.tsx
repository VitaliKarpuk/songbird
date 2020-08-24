import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import BlockQuestions from "./components/BlockQuestions/BlockQuestions";
import BlockAnswerOptions from "./components/BlockAnswerOptions/BlockAnswerOptions";
import getListOptions from "./action/getListOptions";
import GameOver from "./components/GameOver/GameOver";
import birdsData from "./birdsData";
import { stateType } from "./reducers/reducers";
import { CircularProgress } from "@material-ui/core";

interface Item {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}
type Props = {
  getListOptions: (arg: Array<Item>) => void;
  state: stateType;
};

const App: React.FC<Props> = ({ getListOptions, state }: Props) => {
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [numberOption, setNumberOption] = useState<number>(0);
  const [question, setQuestion] = useState();
  const [activeBtn, setActiveBtn] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (birdsData) {
      getListOptions(birdsData[numberQuestion]);
    }
  }, [birdsData, numberQuestion]);

  const handelOption = (id: number): void => {
    setNumberOption(id);
  };

  const handleCorrectAnswer = () => {
    setShowCorrectAnswer(true);
  };

  const activeNextBtn = () => {
    setActiveBtn(true);
  };

  const handleNextQuestion = () => {
    if (numberQuestion < state.listOptions.length - 1) {
      setNumberQuestion((prev) => prev + 1);
    } else {
      setShowResult(true)
    }
    setActiveBtn(false);
    setShowCorrectAnswer(false);
  };

  const showScore = (number: number) => {
    setScore((prev) => prev + number)
  }
  // Change Name function
  const handleReapetGame = () => {
    setNumberQuestion(0)
    setShowResult(false);
    setScore(0)
  };
  useEffect(() => {
    if (state.listOptions) {
      const index = Math.floor(Math.random() * 6);
      setQuestion(state.listOptions[index]);
    }
  }, [state.listOptions]);

  return (
    <>
      <div className="wrapper">
        <Header numberQuestion={numberQuestion} score={score}/>
        {!showResult ? (
          <>
            <BlockQuestions
              question={question}
              showCorrectAnswer={showCorrectAnswer}
            />
            <BlockAnswerOptions
              listOptions={state.listOptions}
              numberOption={numberOption}
              question={question}
              handelOption={handelOption}
              handleNextQuestion={handleNextQuestion}
              numberQuestion={numberQuestion}
              activeBtn={activeBtn}
              activeNextBtn={activeNextBtn}
              handleCorrectAnswer={handleCorrectAnswer}
              showScore={showScore}
            />
          </>
        ) : (
          <GameOver handleReapetGame={handleReapetGame} score={score}/>
        )}
        {/* <CircularProgress /> */}
      </div>
    </>
  );
};

const mapStateToProps = (state: stateType) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getListOptions: (arg: any) => dispatch(getListOptions(arg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
