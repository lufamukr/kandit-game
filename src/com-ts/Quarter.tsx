import { ChangeEvent, useState } from "react"
import { StateType } from "../state"
import st from "./Quarter.module.css"

type QuarterType = {
  state: StateType;
  onClickFunc: (id:number, point:string, callb:(val:string) => void) => void;
}

export const Quarter = (props:QuarterType) => {

  let [currPoint, setCurrPoint] = useState('')
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    let val = e.currentTarget.value;
    if(val.length <= 2) {
      setCurrPoint(val)
    }
  }

  const whiteInput = (val:string) => {
    setCurrPoint(val)
  }

  return(
    <div className={st.cover} key={props.state.idMin}>
      <span className={st.title}>{props.state.title}</span>
      <input className={st.input} type="text" value={currPoint} onChange={onChangeHandler}/>
      <button className={st.button} onClick={()=>{props.onClickFunc(props.state.idMin, currPoint, () => {whiteInput('')})}}>{'\u2714'}</button>
      <span className={st.result}>
        {
          props.state.currPoint !== '' ? Number(props.state.currPoint) + props.state.plusPoint : '?'
        }
        </span>
    </div>
  )
}