import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./style.scss";

type Props = {
  audio?: string;
};

const Player: React.FC<Props> = (props: Props) => {
  const { audio } = props;
  const [startPlay, setStatrtPlay] = useState(false);
  const player = useRef("audio_tag");
  const pause = () => {
    setStatrtPlay(false);
    player.current.container.current.childNodes[0].pause();
  };
  const play = () => {
    setStatrtPlay(true);
    player.current.container.current.childNodes[0].play();
  };


  return (
    <div className="wrapper__audio">
      <div className="btn-play" onClick={!startPlay ? play : pause}>
        {!startPlay ? (
          <span>
            <i className="fas fa-play" />
          </span>
        ) : (
          <div>
            <i className="fas fa-pause"></i>
          </div>
        )}
      </div>
      <AudioPlayer
        autoPlay
        ref={player}
        src={audio}
      />
    </div>
  );
};

export default Player;
