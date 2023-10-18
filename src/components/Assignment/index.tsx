import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {AiFillCheckCircle} from "react-icons/ai";
import { useState } from "react";

export function Assignment({title, deleteFromList, updateCompleted}: {title: string, deleteFromList:(title: string)=>void, updateCompleted:(f: boolean)=>void}) {

  const [clicked, setClicked] = useState(false);
  
  const fillCircle = () => {
    setClicked(clicked=>!clicked);
    updateCompleted(clicked);
  }


  return (
    <div className={styles.assignment}>
      {clicked? <AiFillCheckCircle onClick={fillCircle} size={20} /> : <button onClick={fillCircle} className={styles.checkContainer}><div /></button>}
      

      <p className={clicked? styles.textCompleted : ''}>{title}</p>

      <button onClick={()=>deleteFromList(title)} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
