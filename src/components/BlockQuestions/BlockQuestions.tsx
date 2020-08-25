import React from "react";
import Player from "../Player/Player";

import "./style.scss";

type Props = {
  question: any;
  showCorrectAnswer: boolean;
  stopPlayer: boolean;
};

const BlockQuestions2: React.FC<Props> = (props: Props) => {
  const { question, showCorrectAnswer, stopPlayer } = props;
  return (
    <div className="block-questions">
      <div className="image-bird">
        <span
          className={!showCorrectAnswer ? "hidden-bird" : ''}
          style={{
            backgroundImage: `url('${
              !showCorrectAnswer ? '' : question.image
            }')`,
          }}
        ></span>
      </div>
      <div className="song-bird">
        <div className="title__bird">
          <h2>{!showCorrectAnswer ? "***" : question.name}</h2>
        </div>
        {question && <Player audio={question.audio} autoPlay={false} stopPlayer={stopPlayer} />}
      </div>
    </div>
  );
};

export default BlockQuestions2;
