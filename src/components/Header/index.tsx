import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";


export function Header({updateList}:{updateList:(title:string)=>void}) {
  
  const [buttonDiabled, setState] = useState({isEmpty: true, cursorStyle: 'not-allowed'});
  
  const [title, setTitle] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle((e.target as HTMLInputElement).value);

    setState({
      ...buttonDiabled,
      isEmpty: (!Boolean((e.target as HTMLInputElement).value.length)),
      cursorStyle: 'default'
    })
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input onChange={(e) => onChange(e)} placeholder="Add a new assignment" type="text" />
        <button type={"button"} onClick={()=>updateList(title)} disabled={buttonDiabled['isEmpty']} style={{cursor:buttonDiabled['cursorStyle']}}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
