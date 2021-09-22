import React from "react";
import "../styles/App.css";
import MutationRow from "./MutationRow";
import Display from "./Display";
import store from "../store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="content-holder">
        <h1 className="heading">Redux Counter</h1>
        <Display />
        <MutationRow />
      </div>
    </Provider>
  );
};

export default App;
