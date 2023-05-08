import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
const clear = () =>{
  setResult("");
}
const backspace = () =>{
  setResult(result.slice(0,-1));

}
const calculate = () =>{
  try{   setResult(eval(result).toString());

  }catch(err){
    setResult("Error");
  }
}
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="operand">
{result}        </div>
      </div>
      
      <button onClick={clear} id="clear"className="span-two">AC</button>
      <button onClick={backspace} id="backspace" >DEL</button>
      <button onClick={handleClick} name="/">&divide;</button>
      <button onClick={handleClick} name="1">1</button>
      <button onClick={handleClick} name="2"> 2</button>
      <button onClick={handleClick} name="3">3</button>
      <button onClick={handleClick} name="*">&times;</button>
      <button onClick={handleClick} name="4">4</button>
      <button onClick={handleClick} name="5">5</button>
      <button onClick={handleClick} name="6">6</button>
      <button onClick={handleClick} name="+">+</button>
      <button onClick={handleClick} name="7">7</button>
      <button onClick={handleClick} name="8">8</button>
      <button onClick={handleClick} name="9">9</button>
      <button onClick={handleClick} name="-">&ndash;</button>
      <button onClick={handleClick} name=".">.</button>
      <button onClick={handleClick} name="0">0</button>
      <button onClick={calculate} id = "result"className="span-two">=</button>
    </div>
  );
};
export default App;

// import "./App.css";
// import { useReducer } from "react";
// const ACTIONS = { //Object with 5 properties
//   ADD_DIGIT: "add-digit",
//   CLEAR: "clear",
//   DELETE_DIGIT: "delete-digit",
//   CHOOSE_OPERATION: "choose-operation",
//   EVALUATE: "evaluate"
// }

// function reducer(state, { type, payload }) {
//   switch(type){
//     case ACTIONS.ADD_DIGIT:
//       return{
//         ...state,
//         currendOperand: `${currendOperand || ""}${payload.digit}`
//       }
//   }

//   //Reducer function is used to update the state of a react component and it takes two aguments state and an object with type and payload
//   //then inside the reducer function we write code to update the state based on the type and payload
// }
// function App() {
//   const [{ currendOperand, previousOperand, operation }, dispatch] = useReducer(reducer,{}); //here useReducer hook takes two arguments reducer function and initial state object which is empty here
//   dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:1}})
//   return (//Here the hook returns an array of two values the current state object and dispatch,here the current state consists of three properties currentOperand,---,---
//     <div className="calculator-grid">
//       <div className="output">
//         <div className="previous-operand">
//           {previousOperand}
//           {operation}
//         </div>
//         <div className="current-operand">{currendOperand}</div>
//       </div>
//       <button className="span-two">AC</button>
//       <button>DEL</button>
//       <button>/</button>
//       <button>1</button>
//       <button>2</button>
//       <button>3</button>
//       <button>*</button>
//       <button>4</button>
//       <button>5</button>
//       <button>6</button>
//       <button>+</button>
//       <button>7</button>
//       <button>8</button>
//       <button>9</button>
//       <button>-</button>
//       <button>.</button>
//       <button>0</button>
//       <button className="span-two">=</button>
//     </div>
//   );
// }
// export default App;
