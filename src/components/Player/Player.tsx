import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./style.scss";

type Props = {
  audio?: string;
  autoPlay: boolean;
  numberOption?: number;
  stopPlayer?: boolean;
};

const Player: React.FC<Props> = (props: Props) => {
  const { audio, autoPlay, numberOption, stopPlayer } = props;

  const [startPlay, setStatrtPlay] = useState(autoPlay);
  const player: any = useRef("audio_tag");
  const pause = () => {
    setStatrtPlay(false);
    player.current.container.current.childNodes[0].pause();
  };
  const play = () => {
    setStatrtPlay(true);
    player.current.container.current.childNodes[0].play();
  };

  useEffect(() => {
    if (numberOption) {
      setStatrtPlay(true);
    }
  }, [numberOption]);

  useEffect(() => {
    if (stopPlayer) {
      pause();
    }
  }, [stopPlayer]);

  return (
    <div className="wrapper__audio">
      <div className="btn-play" onClick={startPlay ? pause : play}>
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
        ref={player}
        src={audio}
        autoPlay={autoPlay}
        onCanPlay={() => pause()}
      />
    </div>
  );
};

export default Player;
