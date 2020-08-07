import React from "react";
import Player from '../Player/Player';

import "./style.scss";

const BlockQuestions2: React.FC = () => {


  return (
    <div className="block-questions">
      <div className="image-bird">
        <span className="hidden-bird"></span>
      </div>
      <div className="song-bird">
        <div className="title__bird">
          <h3>*************</h3>
        </div>
        <Player  />
      </div>
    </div>
  );
};

export default BlockQuestions2;
