import React from "react";
import "./style.scss";

type Props = {
  numberQuestion: number;
  score: number
};
const listQuestion = [
  "Разминка",
  "Воробьиные",
  "Лесные птицы",
  "Певчие птицы",
  "Хищные птицы",
  "Морские птицы",
];

const Header: React.FC<Props> = (props: Props) => {
  const { numberQuestion, score } = props;
  return (
    <>
      <header>
        <div className="header__logo">
          <div className="logo">SONGBIRD</div>
          <div className="score">Score: {score} </div>
        </div>
        <ul className="header__list-questions">
          {listQuestion.map((item, index) => {
            return index !== numberQuestion ?  <li>{item}</li> : <li className='question_active'>{item}</li> 
          })}
        </ul>
      </header>
    </>
  );
};

export default Header;
