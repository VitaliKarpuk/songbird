import React from "react";
import "./style.scss";

type Props = {
  handleReapetGame: () => void;
  score: number;
};
const GameOver: React.FC<Props> = (props: Props) => {
  const { handleReapetGame, score } = props;
  console.log(score);

  return (
    <div className="game-over">
      <h2>Поздравляем!</h2>
      <p>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
      {score === 30 ? (
        <div className='win-game'></div>
      ) : (
        <button onClick={handleReapetGame}>Попробывать еще раз!</button>
      )}
    </div>
  );
};

export default GameOver;
