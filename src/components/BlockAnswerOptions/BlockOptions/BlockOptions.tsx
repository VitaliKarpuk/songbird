import React, { useState, useEffect, useRef } from "react";
import { Item } from "../../../reducers/reducers";
import "./style.scss";

type Props = {
  listOptions: Array<Item>;
  handelOption: (id: number) => void;
  question: {
    id: number
  };
  activeNextBtn: () => void;
  activeBtn: boolean;
  handleCorrectAnswer: () => void;
  showScore: (number: number) => void;
};

const urlError =
  "https://zvukipro.com/uploads/files/2019-06/1561356080_b5f0886abfa6621.mp3";
const urlWin =
  "https://zvukipro.com/uploads/files/2019-10/1571643581_win31.mp3";

const BlockOptions: React.FC<Props> = (props: Props) => {
  const {
    listOptions,
    handelOption,
    question,
    activeNextBtn,
    activeBtn,
    handleCorrectAnswer,
    showScore,
  } = props;
  const [list, setList] = useState(listOptions);
  const [scoreQuestion, setScoreQuestion] = useState(5);
  const audio: any = useRef("audio_tag");

  const handleAnswer = (id: number) => {
    handelOption(id);
    if (!activeBtn) {
      const listAnswers = list.map((item) => {
        if (item.id === id && question.id !== id) {
          setScoreQuestion((prev) => prev - 1);
          audio.current.src = urlError;
          audio.current.play();
          return { ...item, classSpan: "incorrect_answer" };
        } else if (item.id === id && question.id === id) {
          console.log(item.name)
          audio.current.src = urlWin;
          audio.current.play();
          activeNextBtn();
          handleCorrectAnswer();
          showScore(scoreQuestion);
          setScoreQuestion(5);
          return { ...item, classSpan: "correct_answer" };
        } else {
          return item;
        }
      });
      setList(listAnswers);
    }
  };

  useEffect(() => {
    setList(listOptions);
  }, [listOptions]);

  return (
    <div className="wrapper__option">
      <ul>
        {list.map((item: any) => {
          return (
            <li key={item.id} onClick={() => handleAnswer(item.id)}>
              <span className={item.classSpan}></span>
              {item.name}
            </li>
          );
        })}
      </ul>
      <audio ref={audio} />
    </div>
  );
};

export default BlockOptions;
