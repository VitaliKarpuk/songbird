import React from "react";
import Header from "./components/Header/Header";
import BlockQuestions from './components/BlockQuestions/BlockQuestions';
import { CircularProgress } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <BlockQuestions />
        {/* <CircularProgress /> */}
      </div>
    </>
  );
};

export default App;
