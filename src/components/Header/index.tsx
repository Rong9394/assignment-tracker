import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


export function Header({updateList}:{updateList:(title:string, dueDate:Date|undefined)=>void}) {
  
  // states to keep track of client's mouse position
  const [mouseX, setX] = useState(0);
  const [mouseY, setY] = useState(0);
  // state to control showing calendar or not
  const [show, setShow] = useState(false);
  // state to keep track of date selected
  const [dueDate, setDate] = useState<Date>();
  // state to enable or disable create button
  const [buttonDiabled, setState] = useState({isEmpty: true, cursorStyle: 'not-allowed'});
  // state to keep track of title input
  const [title, setTitle] = useState('');

  
  // function to enable/disable create button based on input length > 0
  // and update state of title
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle((e.target as HTMLInputElement).value);

    setState({
      ...buttonDiabled,
      isEmpty: (!Boolean((e.target as HTMLInputElement).value.length)),
      cursorStyle: 'default'
    })
  }

  // function to show calendar
  const showCalender = (e: React.MouseEvent<HTMLButtonElement>) => {
    setX(e.clientX);
    setY(e.clientY);
    setShow(true);
  }

  // function to hide calendar
  const hideCalender = () => {
    setShow(false);
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      {show? <div style={{top: mouseY, left: mouseX, position: "absolute", background: "#262626", zIndex:"2"}} >
          <DayPicker mode="single" selected={dueDate} onSelect={setDate}/>
          <button onClick={hideCalender} id={styles.confirmDate} type="button">Confirm</button>
      </div> : null}
      <form className={styles.newAssignmentForm}>
        <div>
          <input onChange={(e) => onChange(e)} placeholder="Add a new assignment" type="text" />
          <button type={"button"} onClick={(e) => showCalender(e)} id={styles.datePicker}>Select due date</button>
        </div>
        
        <button type={"button"} onClick={()=>updateList(title, dueDate)} disabled={buttonDiabled['isEmpty']} style={{cursor:buttonDiabled['cursorStyle']}}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
