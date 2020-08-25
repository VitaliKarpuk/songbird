import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import BlockQuestions from "./components/BlockQuestions/BlockQuestions";
import BlockAnswerOptions from "./components/BlockAnswerOptions/BlockAnswerOptions";
import getListOptions from "./action/getListOptions";
import GameOver from "./components/GameOver/GameOver";
import birdsData from "./birdsData";
import { stateType } from "./reducers/reducers";

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
  listOptions: any;
};

const App: React.FC<Props> = ({ getListOptions, listOptions }: Props) => {
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [numberOption, setNumberOption] = useState<number>(0);
  const [question, setQuestion] = useState();
  const [activeBtn, setActiveBtn] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [stopPlayer, setStopPlayer] = useState(false);

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
    setStopPlayer(true)
  };

  const activeNextBtn = () => {
    setActiveBtn(true);
  };

  const handleNextQuestion = () => {
    setStopPlayer(false)
    if (numberQuestion < listOptions.length - 1) {
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
    if (listOptions) {
      const index = Math.floor(Math.random() * 6);
      setQuestion(listOptions[index]);
    }
  }, [listOptions]);

  return (
    <>
      <div className="wrapper">
        <Header numberQuestion={numberQuestion} score={score}/>
        {!showResult ? (
          <>
            <BlockQuestions
              question={question}
              showCorrectAnswer={showCorrectAnswer}
              stopPlayer={stopPlayer}
            />
            <BlockAnswerOptions
              listOptions={listOptions}
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
      </div>
    </>
  );
};

const mapStateToProps = (state: stateType) => {
  return{
    listOptions: state.listOptions
  }

};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getListOptions: (arg: any) => dispatch(getListOptions(arg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
