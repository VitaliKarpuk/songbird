import React from "react";
import BlockOptions from "./BlockOptions/BlockOptions";
import BlockDescriptions from "./BlockDescription/BlockDescriptions";
import { Item } from '../../reducers/reducers';
import './style.scss'

type Props = {
  listOptions: Array<Item>,
  handelOption: (id : number) => void,
  numberOption: number 
}
const BlockAnswerOptions: React.FC<Props> = (props : Props) : JSX.Element => {
  const { listOptions, handelOption, numberOption } = props;
  return (
    <div className='wrapper__option-description'>
      <BlockOptions listOptions={listOptions} handelOption={handelOption}/>
      <BlockDescriptions numberOption={numberOption} listOptions={listOptions}/>
    </div>
  );
};

export default BlockAnswerOptions;
