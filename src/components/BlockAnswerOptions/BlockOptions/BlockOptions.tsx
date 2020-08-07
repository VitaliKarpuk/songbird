import React from "react";
import { Item } from '../../../reducers/reducers';
import "./style.scss";


type Props = {
  listOptions: Array<Item>;
  handelOption: (id: number) => void
};



const BlockOptions: React.FC<Props> = (props: Props) => {
  const { listOptions, handelOption } = props;

  return (
    <div className="wrapper__option">
      <ul>
        {listOptions.map((item) => {
          return (
            <li key={item.id} onClick={() => handelOption(item.id)}>
              <span></span>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlockOptions;
