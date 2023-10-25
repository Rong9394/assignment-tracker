import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {AiFillCheckCircle} from "react-icons/ai";
import { useState } from "react";

export function Assignment({title, dueDate, deleteFromList, updateCompleted}: {title: string, dueDate: Date|undefined, deleteFromList:(title: string)=>void, updateCompleted:(f: boolean)=>void}) {

  // state to keep track of if the completion box is ticked
  const [clicked, setClicked] = useState(false);
  // function to update clicked state and update number of completed assignments
  const fillCircle = () => {
    setClicked(clicked=>!clicked);
    updateCompleted(clicked);
  }

  // Configure text ouput for the due date of the assignment
  let status = null;

  if(!(dueDate==null)) {
    let dateDif = Math.ceil((dueDate?.getTime() - Date.now()) / 1000 / 60 / 60 / 24);

    if(dateDif>1) status="Due: "+dateDif+" days";
    else if(dateDif==1) status="Due: tomorrow";
    else if(dateDif==0) status="Due: today";
    else status="Due: overdue";

  } else {
    status="No due date set";
  }


  return (
    <div className={styles.assignment}>
      {clicked? <AiFillCheckCircle onClick={fillCircle} size={20} /> : <button onClick={fillCircle} className={styles.checkContainer}><div /></button>}
      

      <p className={clicked? styles.textCompleted : ''}>{title}</p>
      <span>{status}</span>
      <button onClick={()=>deleteFromList(title)} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
