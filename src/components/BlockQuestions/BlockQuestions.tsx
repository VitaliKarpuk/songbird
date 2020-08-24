import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import { Item } from "../../reducers/reducers";
import img from "../../images/hidden-bird.jpg";

import "./style.scss";

type Props = {
  question: any;
  showCorrectAnswer: boolean;
};

const BlockQuestions2: React.FC<Props> = (props: Props) => {
  const { question, showCorrectAnswer } = props;

  return (
    <div className="block-questions">
      <div className="image-bird">
        <span
          className="hidden-bird"
          style={{
            backgroundImage: `url('${
              !showCorrectAnswer ? img : question.image
            }')`,
          }}
        ></span>
      </div>
      <div className="song-bird">
        <div className="title__bird">
          <h2>{!showCorrectAnswer ? "***" : question.name}</h2>
        </div>
        {question && <Player audio={question.audio} autoPlay={false} />}
      </div>
    </div>
  );
};

export default BlockQuestions2;
