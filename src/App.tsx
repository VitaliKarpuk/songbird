import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import BlockQuestions from "./components/BlockQuestions/BlockQuestions";
import BlockAnswerOptions from "./components/BlockAnswerOptions/BlockAnswerOptions";
import getListOptions from "./action/getListOptions";
import birdsData from "./birdsData";
import { stateType } from './reducers/reducers';
import { CircularProgress } from "@material-ui/core";

interface Item {
  id: number,
  name: string,
  species: string,
  description: string,
  image: string,
  audio: string
}
type Props = {
  getListOptions: (arg: Array<Item>) => void;
  state: stateType
};

const App: React.FC<Props> = ({ getListOptions, state }: Props) => {
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [numberOption, setNumberOption] = useState<number>(0);

  useEffect(() => {
    if (birdsData) {
      getListOptions(birdsData[0]);
    }
  }, [birdsData, numberQuestion]);

  const handelOption = (id: number) : void => {
    setNumberOption(id);
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <BlockQuestions />
        <BlockAnswerOptions listOptions={state.listOptions} handelOption={handelOption} numberOption={numberOption}/>
        {/* <CircularProgress /> */}
      </div>
    </>
  );
};


const mapStateToProps = (state: stateType) => ({
  state,
});

const mapDispatchToProps = (dispatch : any) => {
  return {
    getListOptions: (arg: any) => dispatch(getListOptions(arg)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
