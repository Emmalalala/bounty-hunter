import React from "react";
import DataBase from "./DataBase";
import "./App.css";
import { withState } from './context/StateProvider'

const App = () => {
  return (
    <div>
        <h1>Bounty Hunter</h1>
      <div className="mainContainer">
        <DataBase />
      </div>
    </div>
  );
};

export default withState(App)
