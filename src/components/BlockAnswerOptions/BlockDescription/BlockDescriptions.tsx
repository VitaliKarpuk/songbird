import React, { useState, useEffect } from "react";
import Player from "../../Player/Player";
import { Item } from "../../../reducers/reducers";
import "./style.scss";

type Props = {
  listOptions: Array<Item>;
  numberOption: number;
  numberQuestion: number
};
const BlockDescriptions: React.FC<Props> = (props: Props) => {
  const { numberOption, listOptions, numberQuestion } = props;
  const [ hiddenDescription, setHiddenDescription] = useState(true);


  useEffect(() => {
    setHiddenDescription(false);
  }, [numberOption])

  useEffect(() => {
    setHiddenDescription(true)
  }, [numberQuestion]);

  return (
    <div className="wrapper__description">
      {listOptions[numberOption - 1] && !hiddenDescription  ? (
        <>
          <div className="description__title">
            <div
              className="description__image"
              style={{
                backgroundImage: `url('${
                  listOptions[numberOption - 1].image
                }')`,
              }}
            ></div>
            <div className="description__audio">
              <h4>{listOptions[numberOption - 1].name}</h4>
              <h5>{listOptions[numberOption - 1].species}</h5>
              <Player audio={listOptions[numberOption - 1].audio} autoPlay={true} numberOption={numberOption}/>
            </div>
          </div>
          <p>{listOptions[numberOption - 1].description}</p>
        </>
      ) : (
        <p>Послушайте плеер. Выберите птицу из списка</p>
      )}
    </div>
  );
};

export default BlockDescriptions;
