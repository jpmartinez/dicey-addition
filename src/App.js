import React, { useReducer } from "react";
import { DndProvider } from "react-dnd";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import "./App.scss";
import { Steps } from "./components/steps/Steps";
import { initialState, reducer } from "./reducer";

export const DiceyAddictionContext = React.createContext();

const DiceyAddictionContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <DiceyAddictionContext.Provider value={[state, dispatch]}>{props.children}</DiceyAddictionContext.Provider>;
};

function App() {
  return (
    <DiceyAddictionContextProvider>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Steps />
      </DndProvider>
    </DiceyAddictionContextProvider>
  );
}

export default App;
