import { useState } from "react";
import "./App.css";
import { Quarter } from "./com-ts/Quarter";
import { state } from "./state";
import { Archive } from "./com-ts/archive/Archive";

let App = () => {

  const [changeState, setChangeState] = useState(state);

  const onClickFunc = (id: number, point: string, callb:(val:string) => void) => {
    let line = changeState.find((f) => {
      return f.idMin === id
    })
    if(line) {
      line.currPoint = point
      setChangeState([...changeState])
      callb('')
    }
  };

  return (
    <div>
      <Quarter state={changeState[0]} onClickFunc={onClickFunc}/>
      <Quarter state={changeState[1]} onClickFunc={onClickFunc}/>
      <Quarter state={changeState[2]} onClickFunc={onClickFunc}/>
      <Quarter state={changeState[3]} onClickFunc={onClickFunc}/>

      <div className='coverBtn'>
        <button className={'btn'}>{'\u21ba'}</button>
        <button className={'btn'}>{'\u270e'}</button>
      </div>

      <Archive />
    </div>
  );
};

export default App;
